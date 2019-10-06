export interface Quiz {
  title: string;
  questions: Array<{
    text: string;
    type: questionType;
    answers: Array<{ text: string; value: number }>;
  }>;
}
export type questionType = "single" | "multiple" | "custom";
