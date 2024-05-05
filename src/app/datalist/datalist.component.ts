import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogcomponentComponent} from '../dialogcomponent/dialogcomponent.component'
import { Router } from '@angular/router';
@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent {
  constructor(public dialog:MatDialog,public route:Router) {

  }
  users = [{ "id": "101" ,"name": "Balaji", "Gender": "Male", "age": 23,"gmail" : "balaji@gmail.com","phone":"8838173300","created":"01/05/2024"}, 
  { "id": "102" ,"name": "Karthi", "Gender": "Female", "age": 27,"gmail" : "karthi@gmail.com","phone":"8977987990","created":"02/05/2024" }, 
  { "id": "103" ,"name": "Saisaravanan", "Gender": "Male", "age": 5,"gmail" : "sai@gmail.com","phone":"8976453627","created":"03/05/2024" },
  { "id": "104" ,"name": "Vijay", "Gender": "Male", "age": 34,"gmail" : "vijay@gmail.com","phone":"8598987990","created":"03/05/2024" },
  { "id": "105" ,"name": "selvi", "Gender": "Female", "age": 29,"gmail" : "selvi@gmail.com","phone":"88979877443","created":"04/05/2024" },
  { "id": "106" ,"name": "Mani", "Gender": "Male", "age": 31,"gmail" : "mani@gmail.com","phone":"88979877443","created":"04/05/2024" }]
  public values = this.users
 public toBeSearched = false
 public issorted = false
 
 search(){
  this.toBeSearched=!this.toBeSearched
 }
 trigger(event:any){
  console.log(event)
  var elements = document.getElementsByClassName('check')
  for(let i=0;i<elements.length;i++){
    const input = elements[i] as HTMLInputElement; 
    if(!input.checked){
    input.checked = true
    }else{
      input.checked = false
    }
  }
 }

  filter(event:any){
    console.log(event)
    if(event.target.value.length>0) {
    this.users = this.values.filter(x => {
      return x.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
  }
  else{
    this.users = this.values
  }

  
    console.log(this.users)
  }

  dialogopen(user:any){
    // window.alert("Hi Boss")
    const dialogRef = this.dialog.open(DialogcomponentComponent, {
      width: '250px',
      data: { title: 'Balaji', content:`userName: ${user.name} userGender: ${user.Gender}  UserGmail: ${user.gmail} Contact: ${user.phone}` }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  opendetail(user:any){

    console.log(user)
    this.route.navigate(['detailview'],{queryParams : { data: JSON.stringify(user),userlist:JSON.stringify(this.users)}, skipLocationChange : true})
  }

  Previous(){
    console.log("previous")
  }
  next(){
    console.log("next")
  }

  sort(){
    if(!this.issorted){
    this.users = this.values.sort((a, b) => {
      if (a.name < b.name) return 1; // Return 1 to indicate that 'a' comes after 'b'
      if (a.name > b.name) return -1; // Return -1 to indicate that 'a' comes before 'b'
      return 0; // Return 0 if the names are equal
    });
    this.issorted = true
    console.log(this.users)
  }
  else{
    this.users = this.values.sort((a, b) => {
      if (a.name > b.name) return 1; // Return 1 to indicate that 'a' comes after 'b'
      if (a.name < b.name) return -1; // Return -1 to indicate that 'a' comes before 'b'
      return 0; // Return 0 if the names are equal
    });
    console.log(this.users)
    this.issorted = false
  }
  }
  new(){
    console.log("Create new user")
  }

  

}
