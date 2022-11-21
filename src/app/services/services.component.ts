import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if ( window.innerWidth <=768 ) {
      this.isMobile = true;
    }
  }

}
