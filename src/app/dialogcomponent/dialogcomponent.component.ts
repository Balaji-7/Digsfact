import { Component, Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-dialogcomponent',
  templateUrl: './dialogcomponent.component.html',
  styleUrls: ['./dialogcomponent.component.css']
})
export class DialogcomponentComponent {

  constructor(public dialogref:MatDialogRef<DialogcomponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ){

  }

  onclose() : void {
    this.dialogref.close();
  }
}
