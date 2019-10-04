import { Injectable } from "@angular/core";

import { Quiz } from "./quiz";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  constructor() {}
  private quizData: Quiz = {
    questions: []
  };
  getUser(user) {
    return "marvin";
  }
  public setQuizData(data: Quiz) {
    this.quizData = data;
  }
  public getQuizData() {
    return this.quizData;
  }
}
