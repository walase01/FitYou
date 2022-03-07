import { Component, OnInit } from '@angular/core';
import { menu } from '../../fityou/interface/fityou.interface';


@Component({
  selector: 'app-tabpages',
  templateUrl: './tabpages.component.html',
  styleUrls: ['./tabpages.component.css']
})
export class TabpagesComponent implements OnInit {

  menuItem : menu[] = [
    { ruta : 'fityou/home' , title : 'Home' },
    { ruta : 'fityou/service' , title : 'Mapa' },
    { ruta : ' ' , title : 'About' },
    { ruta : ' ' , title : 'Contact' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
