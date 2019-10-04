import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizReaderComponent } from './quiz-reader.component';

describe('QuizReaderComponent', () => {
  let component: QuizReaderComponent;
  let fixture: ComponentFixture<QuizReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
