import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1><timer></timer> `
})
export class AppComponent {
  title = 'hello app';
}
