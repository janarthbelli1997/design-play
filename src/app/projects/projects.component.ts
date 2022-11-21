import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  isMobile: boolean = false;
  constructor() { }

  ngOnInit() {
    if ( window.innerWidth <=768 ) {
      this.isMobile = true;
    }
    
}
}
