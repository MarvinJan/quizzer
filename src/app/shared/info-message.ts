export interface InfoMessage {
  message: string;
  timer: NodeJS.Timer;
  type?: "error" | "info";
}
