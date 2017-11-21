import { MatDialogRef } from "@angular/material/dialog";
import { Component } from "@angular/core";

@Component({
  selector: 'my-dialog',
  template: `
    <h1 mat-dialog-title>Perform action?</h1>
    <mat-dialog-content>Are you sure?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button mat-button [mat-dialog-close]="true">Yes</button>
   </mat-dialog-actions>
  `,
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {
    console.log('dialog opened');
  }
}
