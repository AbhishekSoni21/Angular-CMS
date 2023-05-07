import { PAGE_LAYOUTS } from './DB/PAGE-LAYOUT';
import { Component, OnInit } from '@angular/core';
import { PORTAL_PAGE } from './DB/Portal-Page';
import {MatDialog} from '@angular/material/dialog';
import { CommonDialogComponent } from './Components/common-dialog/common-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pageLayout = PAGE_LAYOUTS
  portalPage = PORTAL_PAGE

  constructor(private matDialog:MatDialog){

  }


  ngOnInit(){

  }

  OpenDialog(){
    this.matDialog.open(CommonDialogComponent)
  }
}
