import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit , AfterViewInit {

  @ViewChild("mapdiv") mapa : ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement , // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
      });

  }

  ngOnInit(): void {
  }



}
