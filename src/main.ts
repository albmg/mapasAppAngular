import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxibWciLCJhIjoiY2t6cjYwbjYzMDdiMDJydDk1azdjZzh6cCJ9.15-9RFqsk3d24jJqv_Xg1w';

if (!navigator.geolocation) {
  alert(' Navegador no soporta geolocalización ')
  throw new Error(' Navegador no soporta geolocalización ')
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
