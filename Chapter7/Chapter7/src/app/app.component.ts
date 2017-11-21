import { Component } from '@angular/core';
import { DataService } from './new-http-client/DataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(srv: DataService) {
    srv.getData().subscribe(data => {
      console.log('data', data.name);
    });

    srv.getOtherData().subscribe(data => console.log('other', data));
  }
}
