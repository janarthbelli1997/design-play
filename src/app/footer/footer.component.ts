import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isMobile:boolean = false;
  constructor( private route : Router) { }

  ngOnInit(): void {
    if ( window.innerWidth <= 768 ) {
      this.isMobile = true;
     
    }  
  }
  toInstagram() {
    this.route.navigateByUrl('www.linkedin.com/in/the-design-play');
  }
  toLinkedIn() {
    // this.route.navigate('www.linkedin.com/in/the-design-play');
  }
}
