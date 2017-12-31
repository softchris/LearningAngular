import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <strong class="navbar-brand">My Timer</strong>
        <timer></timer>  
      </div>
    </div>
  </nav>
  `
})
export class AppComponent {
  title = 'app';
}
