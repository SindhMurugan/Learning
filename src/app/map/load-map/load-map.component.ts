import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';

import { OSM } from 'ol/source';

@Component({
  selector: 'app-load-map',
  templateUrl: './load-map.component.html',
  styleUrl: './load-map.component.css'
})
export class LoadMapComponent implements OnInit {

  map!:Map

  constructor(){
   
  }
  ngOnInit(): void {
    this.loadMap()
  }

  loadMap():void{
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map'
    });

   
  }

}
