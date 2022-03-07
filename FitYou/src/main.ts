import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1Ijoid2FsYXNlIiwiYSI6ImNrenBycXV6ZjBkbW4ydm9heGZrd2E2eWwifQ.96ILgOttK0FZpDYURkGsrQ';

if(!navigator.geolocation){
  alert("El navegador no soporta la geolocalizacion");
  console.log("El navegador no soporta Geolocalizacion");
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
