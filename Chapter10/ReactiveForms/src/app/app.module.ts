import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicComponent } from "./dynamic.component";
import { DynamicRefactored } from "./dynamic.refactored.component";
import { FormComponent } from "./person.form.component";
import { LoginComponent } from "./login.component";

@NgModule({
  declarations: [
    AppComponent, DynamicComponent, DynamicRefactored, FormComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
