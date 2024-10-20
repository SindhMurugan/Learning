import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import { OSM } from 'ol/source';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { placeDetails } from '../action/app';
import { UserInput } from '../action/app.actions';

@Component({
  selector: 'app-load-map',
  templateUrl: './load-map.component.html',
  styleUrl: './load-map.component.css'
})
export class LoadMapComponent implements OnInit {

  map!:Map
  userInput:string=""
  showDetails:boolean = true

  constructor(private service:ApiService , private router:Router , private store:Store<placeDetails>){
   
  }
  ngOnInit(): void {
    this.loadMap()
  }

  loadMap():void{
    this.map = new Map({
      view: new View({
        center:[0,0],
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


  collectInfo():void{
    this.service.fetchInfo(this.userInput).subscribe({
      next:(value:any)=> {
        const mapCenter = fromLonLat([value['lon'] , value['lat']]);
        const view = new View({
          center:mapCenter,
          zoom:5
        })
       

        this.map.setView(view)
        this.showDetails = false
        this.store.dispatch(UserInput({userInput:value['display_name'] , routerStatus:this.showDetails}))
      },
      error:(err)=> console.warn(err)
    })
  }

  showDetailsFunc():void{
    this.router.navigate(['Map/datails'])
    this.showDetails = true
    this.userInput =""
    }
}
