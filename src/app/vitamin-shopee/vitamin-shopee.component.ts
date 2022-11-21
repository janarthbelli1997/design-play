import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-vitamin-shopee',
  templateUrl: './vitamin-shopee.component.html',
  styleUrls: ['./vitamin-shopee.component.css']
})
export class VitaminShopeeComponent implements OnInit {

  isMobile: boolean =false;
  previous:string = "<- Previous Project";
  next: string = "Next Project ->"
  constructor(private route: Router, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    if ( window.innerWidth <=768 ) {
      this.isMobile = true;
    }
  }

  ngAfterViewInit(){
    
    this.spinner.hide();
  }
  openFlyerEats() {
    this.route.navigateByUrl("/flyerEats");
  }


}
