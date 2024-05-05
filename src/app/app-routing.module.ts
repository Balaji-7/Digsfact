import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatalistComponent } from './datalist/datalist.component';
import { DetailviewComponent } from './detailview/detailview.component';

const routes: Routes = [
  {path:'',component:DatalistComponent},
  {path:'detailview',component:DetailviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
