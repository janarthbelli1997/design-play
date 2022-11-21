import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  isMobile: boolean=false;
  constructor() { }

  ngOnInit(): void {
    if ( window.innerWidth <= 768 ) {
      this.isMobile = true;
    } 
   }

}
