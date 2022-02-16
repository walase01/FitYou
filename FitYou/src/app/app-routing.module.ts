import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const route : Routes = [
  { path: 'fityou', loadChildren: ()=> import('./fityou/fityou.module').then(m => m.FityouModule) },
  { path: '**', redirectTo: 'fityou' }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
