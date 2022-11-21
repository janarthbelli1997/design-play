import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-labs',
  templateUrl: './life-labs.component.html',
  styleUrls: ['./life-labs.component.css']
})
export class LifeLabsComponent implements OnInit {
  isMobile: boolean =false;

  constructor() { }

  ngOnInit(): void {
    if ( window.innerWidth <=768 ) {
      this.isMobile = true;
    }
  }

}
