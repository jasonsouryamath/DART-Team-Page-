import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { MenuComponent } from './menu.component';
import { WeatherComponent } from './weather/weather.component';
import { CONST_ROUTING } from './app.routing';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AlertComponent,
    MenuComponent,
    WeatherComponent,



 
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    CONST_ROUTING,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
