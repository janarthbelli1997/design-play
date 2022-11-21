import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-flyer-eats',
  templateUrl: './flyer-eats.component.html',
  styleUrls: ['./flyer-eats.component.css']
})
export class FlyerEatsComponent implements OnInit {
  content : String = "Everyone loves food.The world cusine always attracts the food lovers.So what say,if we have an app that allows to have your food delivered at your doorstep from selected world cuisine restraunts of your city.As a food delivery app,we maintained the uniqueness, fresh look and feel of the applicaiton.This application is up and running in several countries like Singapore, Malayasia and India."
  isMobile: boolean =false;
  previous:string = "<- Previous Project";
  next: string = "Next Project ->"
  slides = [
    {'image': '../../assets/groc.png'}, 
    {'image': '../../assets/Grocery-3.jpg'},
    {'image': '../../assets/Grocery-4.jpg'}  
  ];
  constructor() { }

  ngOnInit(): void {
    this.content = this.content.replace("\n" , "<br>");
    if ( window.innerWidth <=768 ) {
      this.isMobile = true;
    }
    
  }
  openFactoryFresh() {

  }

}
