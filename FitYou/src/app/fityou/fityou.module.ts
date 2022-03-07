import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FityouRoutingModule } from './fityou-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';


@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    FityouRoutingModule
  ]
})
export class FityouModule { }
