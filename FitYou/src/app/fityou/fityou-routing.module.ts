import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: '' , children: [
    { path: 'home' , component : HomeComponent },
    { path: 'service' , component: ServicesComponent },
    { path: '**' , redirectTo: 'home' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FityouRoutingModule { }
