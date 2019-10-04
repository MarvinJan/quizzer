export interface Quiz {
  questions: Array<{ text: string; type: questionType; answers: Array<{ text: string; value: number }> }>;
}
export type questionType = "single" | "multiple" | "custom";