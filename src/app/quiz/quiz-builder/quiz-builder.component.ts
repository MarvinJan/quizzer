import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { InfoMessage } from "src/app/shared/info-message";
import { Quiz, questionType } from "../quiz";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-quiz-builder",
  templateUrl: "./quiz-builder.component.html",
  styleUrls: ["./quiz-builder.component.scss"]
})
export class QuizBuilderComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private quizData: Quiz = this.quizService.getQuizData();
  private infoMessage: InfoMessage = { message: null, timer: null, type: null };
  private areBeingEdited: Array<number[]> = [];

  private addQuestion(question: string, type: questionType = "single") {
    // Change hardcoded type later
    if (question !== "") {
      if (type === "custom") {
        this.quizData.questions.push({
          text: question,
          type: type,
          answers: [{ text: null, value: 0 }]
        });
      } else {
        this.quizData.questions.push({
          text: question,
          type: type,
          answers: []
        });
      }
    } else this.displayInfoMessage("Please, provide a question!", "error");
  }

  private addAnswer(answer: string, questionIndex: number) {
    if (answer !== "")
      this.quizData.questions[questionIndex].answers.push({
        text: answer,
        value: 0
      });
    else this.displayInfoMessage("Please, provide an answer!", "error");
  }

  private clearQuestionAnswers(questionIndex: number) {
    this.quizData.questions[questionIndex].answers = [];
  }

  private removeQuestion(index: number) {
    this.quizData.questions.splice(index, 1);
  }

  private removeAnswer(questionIndex: number, answerIndex: number) {
    this.quizData.questions[questionIndex].answers.splice(answerIndex, 1);
  }

  private toggleBeingEditedStatus(questionIndex: number, answerIndex: number) {
    const editedInfo = this.isBeingEdited(questionIndex, answerIndex);
    if (editedInfo.isEdited === true) {
      this.areBeingEdited.splice(editedInfo.indexOfEdited, 1);
    } else {
      this.areBeingEdited.push([questionIndex, answerIndex]);
    }
  }

  private changeEditedElement(
    questionIndex: number,
    answerIndex: number,
    newValue: string
  ) {
    if (answerIndex === -1)
      this.quizData.questions[questionIndex].text = newValue;
    else {
      this.quizData.questions[questionIndex].answers[
        answerIndex
      ].text = newValue;
    }
    this.toggleBeingEditedStatus(questionIndex, answerIndex);
  }

  private isBeingEdited(questionIndex: number, answerIndex: number) {
    const editedInfo = {
      isEdited: null,
      indexOfEdited: null
    };
    this.areBeingEdited.some((element, i) => {
      if (
        JSON.stringify(element) === JSON.stringify([questionIndex, answerIndex])
      ) {
        editedInfo.isEdited = true;
        editedInfo.indexOfEdited = i;
        return true;
      }
    });
    return editedInfo;
  }

  private saveQuizChanges(quizData) {
    this.quizService.setQuizData(quizData);
    this.router.navigate([`../`], { relativeTo: this.route });
  }

  private displayInfoMessage(message: string, type?: InfoMessage["type"]) {
    if (this.infoMessage.timer) {
      clearTimeout(this.infoMessage.timer);
    }
    this.infoMessage.message = message;
    this.infoMessage.type = type;
    this.infoMessage.timer = setTimeout(() => this.resetInfoMessage(), 4000);
  }

  private resetInfoMessage() {
    this.infoMessage.message = null;
    this.infoMessage.type = null;
  }

  ngOnInit() {
    console.log(this.route.parent.snapshot.paramMap.get("user"));
  }
}
