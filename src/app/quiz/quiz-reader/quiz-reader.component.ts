import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { InfoMessage } from "src/app/shared/info-message";
import { Quiz } from "../quiz";
import { QuizService } from "../quiz.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-quiz-reader",
  templateUrl: "./quiz-reader.component.html",
  styleUrls: ["./quiz-reader.component.scss"]
})
export class QuizReaderComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  private user$: Observable<any>;
  private quizData: Quiz = this.quizService.getQuizData();
  private infoMessage: InfoMessage = { message: null, timer: null, type: null };


  private displayInfoMessage(message: string, type?: InfoMessage["type"]) {
    if (this.infoMessage.timer) {
      clearTimeout(this.infoMessage.timer);
    }
    this.infoMessage.message = message;
    this.infoMessage.type = type;
    this.infoMessage.timer = setTimeout(() => this.resetInfoMessage(), 4000);
  }

  resetInfoMessage() {
    this.infoMessage.message = null;
    this.infoMessage.type = null;
  }

  ngOnInit() {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.quizService.getUser(params.get("user"))
      )
    );
  }
}
