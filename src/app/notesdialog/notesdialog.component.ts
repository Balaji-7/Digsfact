import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notesdialog',
  templateUrl: './notesdialog.component.html',
  styleUrls: ['./notesdialog.component.css']
})
export class NotesdialogComponent {
  constructor(public dialog:MatDialog){

  }



  onSave(){
    console.log("Saved")
  }
}
