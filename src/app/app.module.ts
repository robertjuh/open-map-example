import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {OlMapComponent} from './ol-map/ol-map.component';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, OlMapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
