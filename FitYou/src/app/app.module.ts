import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterpagesComponent } from './shared/footerpages/footerpages.component';
import { TabpagesComponent } from './shared/tabpages/tabpages.component';

FooterpagesComponent

@NgModule({
  declarations: [
    AppComponent,
    TabpagesComponent,
    FooterpagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
