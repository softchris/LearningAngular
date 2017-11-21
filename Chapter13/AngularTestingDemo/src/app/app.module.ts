import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JediListComponent } from "./jedi.list.component";
import { JediDetailComponent } from "./jedi.detail.component";

@NgModule({
  declarations: [
    AppComponent, JediDetailComponent, JediListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
