import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { QuizBuilderComponent } from "./quiz/quiz-builder/quiz-builder.component";
import { QuizReaderComponent } from "./quiz/quiz-reader/quiz-reader.component";
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "marvin",
    pathMatch: "full"
  },
  {
    path: ":user",
    component: UserComponent,
    children: [
      {
        path: "",
        redirectTo: "quiz",
        pathMatch: "full"
      },
      {
        path: "quiz",
        component: QuizReaderComponent
      },
      {
        path: "quiz/edit",
        component: QuizBuilderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
