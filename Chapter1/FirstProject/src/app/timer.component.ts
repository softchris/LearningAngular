import { Component } from "@angular/core";

@Component({
  selector: "timer",
  template: `
    <h1>{{ minutes }}: {{ seconds | number: '2.0' }}</h1>
  `
})
export class TimerComponent {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;

  constructor() {
    this.minutes = 24;
    this.seconds = 59;
  }
}
