import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CiniChopComponent } from './cini-chop/cini-chop.component';
import { FactoryFreshComponent } from './factory-fresh/factory-fresh.component';
import { FlyerEatsComponent } from './flyer-eats/flyer-eats.component';
import { LifeLabsComponent } from './life-labs/life-labs.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { VitaminShopeeComponent } from './vitamin-shopee/vitamin-shopee.component';
import { SociarsComponent } from './sociars/sociars.component';

const routes: Routes = [
  {path:'home' , component : HomeComponent},
  {path:'aboutUs' , component : AboutUsComponent},
  {path:'projects' , component : ProjectsComponent},
  {path:'services' , component : ServicesComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'lifeLabs',component:LifeLabsComponent},
  {path:'flyerEats', component:FlyerEatsComponent},
  {path:'factoryFresh', component:FactoryFreshComponent},
  {path:'ciniChop',component:CiniChopComponent},
  {path:'vitaminShopee',component:VitaminShopeeComponent},
  {path:'sociars',component:SociarsComponent},
  {path: '', redirectTo:'/home',pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
