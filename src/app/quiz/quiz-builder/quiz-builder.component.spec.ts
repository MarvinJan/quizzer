import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBuilderComponent } from './quiz-builder.component';

describe('QuizBuilderComponent', () => {
  let component: QuizBuilderComponent;
  let fixture: ComponentFixture<QuizBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
