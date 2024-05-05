import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {NotesdialogComponent} from '../notesdialog/notesdialog.component'

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {

  constructor(public dialog:MatDialog,public route:Router,public router:ActivatedRoute){

  }

  public userinfo:any
  public user:any

  ngOnInit() {
   this.router.queryParams.subscribe((data) => {
    console.log(data)

    this.userinfo = JSON.parse(data['data'])? JSON.parse(data['userlist']) : {}
    this.user = JSON.parse(data['userlist']) ? JSON.parse(data['data']) : {}

    console.log("userInfo",this.userinfo)
    console.log("user",this.user)
   })   
  }
  
back(){
  this.route.navigate([''])
}

openNotesDialog(): void {
  const dialogRef = this.dialog.open(NotesdialogComponent, {
    width: '400px',
    data: { title: `${this.user.name}`, content:`user: ${this.user}` }
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

openMeasure(){
  window.alert("Please click Measure")
}

reset(){
  console.log("data is reset successfully")
}

overlay(){
  console.log("overlayed")
}
save(){
  console.log("saved")
}
scale(){
  console.log("Saved")
}
removepins(){
  console.log("remove pins")
}
Measure(){
  console.log("Measure")
}
Magnify(){
  console.log("Maginfy")
}
support(){
  console.log("support")
}
help(){
  console.log("help")
}


}

