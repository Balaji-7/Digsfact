import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatalistComponent } from './datalist/datalist.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { NotesdialogComponent } from './notesdialog/notesdialog.component';
import { DialogcomponentComponent } from './dialogcomponent/dialogcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    DatalistComponent,
    DetailviewComponent,
    NotesdialogComponent,
    DialogcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
