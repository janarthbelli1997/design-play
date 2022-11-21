import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import{ MatToolbarModule} from'@angular/material/toolbar';
import{ MatButtonModule} from'@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FlyerEatsComponent } from './flyer-eats/flyer-eats.component';
import { CiniChopComponent } from './cini-chop/cini-chop.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { DialogComponentComponent } from './home/dialog-component/dialog-component.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { NgxSpinnerModule } from "ngx-spinner";
import { LifeLabsComponent } from './life-labs/life-labs.component';
import { FactoryFreshComponent } from './factory-fresh/factory-fresh.component';
import { VitaminShopeeComponent } from './vitamin-shopee/vitamin-shopee.component';
import { SociarsComponent } from './sociars/sociars.component';
@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent, 
    AboutUsComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactUsComponent,
    HomeComponent,
    FooterComponent,
    FlyerEatsComponent,
    FactoryFreshComponent,
    CiniChopComponent,
    MainNavComponent,
    DialogComponentComponent,
    LifeLabsComponent,
    VitaminShopeeComponent,
    SociarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    MatBottomSheetModule,
    NgbModule,
    NgxSpinnerModule,
    MatCarouselModule.forRoot()  
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
