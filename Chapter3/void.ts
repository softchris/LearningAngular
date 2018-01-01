class Pomodoro {
  minutes: number;
  seconds: number;

  resetPomodoro(): void {
    this.minutes = 24;
    this.seconds = 59;
  }
}
