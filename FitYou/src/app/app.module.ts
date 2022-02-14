import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
