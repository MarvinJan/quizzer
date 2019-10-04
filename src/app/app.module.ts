import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { QuizBuilderComponent } from "./quiz/quiz-builder/quiz-builder.component";
import { QuizReaderComponent } from "./quiz/quiz-reader/quiz-reader.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    QuizBuilderComponent,
    QuizReaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
