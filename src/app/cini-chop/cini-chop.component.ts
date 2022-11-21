import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cini-chop',
  templateUrl: './cini-chop.component.html',
  styleUrls: ['./cini-chop.component.css']
})
export class CiniChopComponent implements OnInit {
  isMobile: boolean =false;

  constructor() { }

  ngOnInit(): void {
    if ( window.innerWidth <=768 ) {
      this.isMobile = true;
    }
  }

}
