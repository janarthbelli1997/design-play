import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {
  title_main:string='';
  content_main: any;

  constructor(private _bottomSheet: MatBottomSheet,@Inject(MAT_BOTTOM_SHEET_DATA) public data: {title_main: string,content_main:[]}) { }

  ngOnInit(): void {
    this.loadPage();
  }
  loadPage() {
    this.title_main = this.data.title_main;
    this.content_main = this.data.content_main;
  }

  close(){
    this._bottomSheet.dismiss();
  }
}
