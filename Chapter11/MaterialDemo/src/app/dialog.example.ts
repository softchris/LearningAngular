import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "./dialog.component";

@Component({
  selector: 'dialog-example',
  template: `
  <button (click)="openDialog()">Open Dialog</button>
  `
})
export class DialogExampleComponent {
  selectedOption;

  constructor(private dialog: MatDialog) { }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}
