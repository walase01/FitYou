import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit , AfterViewInit {

  @ViewChild("mapdiv") mapa : ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    
      const map = new mapboxgl.Map({
      container: this.mapa.nativeElement , // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-70.3027629, 18.6693736], // starting position [lng, lat]
      zoom: 8 // starting zoom
      });
  }

  ngOnInit(): void {
  }



}
