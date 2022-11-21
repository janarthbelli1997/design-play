import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMobile: boolean = false;
  slides = [
    {'image': '../../assets/homeLoggers.png'}, 
    {'image': '../../assets/homeCleanerApp.png'},
    {'image': '../../assets/homeFlyerEatss.png'}  
  ];
  projectsDone=[
    {'image': '../../assets/homeFlyer.png'}, 
    {'image': '../../assets/homeGreenwing.png'},
    {'image': '../../assets/homeBeene.png'},
    {'image': '../../assets/homeSerinity.png'}, 
    {'image': '../../assets/homeMatchbox.png'},
  ]
  constructor( private route : Router ,public dialog: MatDialog ,private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    if ( window.innerWidth <= 768) {
      this.isMobile = true;
    }
  }

  talkToUs(){
    this.route.navigateByUrl("contactUs");
  }
  
  openDialog(value:number){
    switch (value) {
      case 1:
        const dialogRef = this.dialog.open(DialogComponentComponent, {
          height :'100vh',
          width : '90vw'
        });


      console.log("yes");
      break;
      case 2:

      case 3:

      case 4:
    }
  }

  openBottomSheet(value:number): void {
    switch(value) {
      case 1:
        this._bottomSheet.open(DialogComponentComponent,{
          data:{title_main:'Research',
          content_main:[{title:'Business',imageSrc:'../../assets/homeBusiness.png',content:'Understand the goal of the project.'},
                      {title:'Competitors',imageSrc:'../../assets/homeCompetitors.png',content:'Analyse the market and competitors.'},
                      {title:'Users',imageSrc:'../../assets/homeUsers.png',content:'Understand the users and their habits.'}]
                }
        });
        break;
        case 2:
          this._bottomSheet.open(DialogComponentComponent,{
            data:{title_main:'Define',
            content_main:[{title:'Problem',imageSrc:'../../assets/homeProblem.png',content:'Define the problem using research material.'},
                        {title:'Information Arch.',imageSrc:'../../assets/homeInfo.png',content:'IA helps to define the flow and reach to an outcome.'},
                        {title:'User Journey Maps',imageSrc:'../../assets/homeuserjourney.png',content:'Create flows keeping users in mind and map it using user personas.'}]
                  }
          });
        break;
        case 3:
          this._bottomSheet.open(DialogComponentComponent,{
            data:{title_main:'Design',
            content_main:[{title:'Wireframes',imageSrc:'../../assets/homeVisualDesign.png',content:'Create sketches to show initial functionality.'},
                        {title:'Visual Design',imageSrc:'../../assets/homeVisualDesign.png',content:'Introduce colors and visual elements to reflect emotion.'},
                        {title:'Usability Testing',imageSrc:'../../assets/homeUsablity.png',content:'Test the interactive prototype with users to get early feedback.'}]
                  }
          });
          break;
          case 4:
            this._bottomSheet.open(DialogComponentComponent,{
              data:{title_main:'Implement',
              content_main:[{title:'Front end',imageSrc:'../../assets/homeFrontEnd.png',content:'Developing frontend with high quality code.'},
                          {title:'API Integration',imageSrc:'../../assets/homeApi.png',content:'Front end to back end integration for better performance.'},
                          {title:'Testing',imageSrc:'../../assets/hometesting.png',content:'Cross platform testing to ensure best experience everywhere.'}]
                    }
            });
            break;
    }
  }

  toService(){
    this.route.navigateByUrl('/services');
  }
  HomeFF(){
    this.route.navigateByUrl('/factoryFresh');
  }
  HomeFE(){
    this.route.navigateByUrl('/flyerEats');
  }
  HomeSoc(){
    this.route.navigateByUrl('/sociars');
  }
}



