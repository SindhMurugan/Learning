import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { Store } from '@ngrx/store';
import { placeDetails } from '../action/app';
import { Observable } from 'rxjs';
import { selectValue } from '../action/app.selector';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { UserInput } from '../action/app.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrl: './place-details.component.css',
  standalone:true,
  imports:[MatCardModule , AsyncPipe , MatIconModule]
})
export class PlaceDetailsComponent {

  place:string=''
  img:string=''
  imageIndex:number =0
  imageCollection:any

  constructor(private service:ApiService , private http:HttpClient , private store:Store<placeDetails> , private router:Router){
   this.store.select(selectValue).subscribe((val:any) => {
    this.place = val['userInput']
    this.fetchImage(this.place)
   

   })
  }

  nextImage():void{
    this.imageIndex +=1
    this.img = this.imageCollection.results[this.imageIndex]['urls']['raw']
  }

  priviousImage = ()=>{
    this.imageIndex > 0? this.imageIndex  -=1 :this.imageIndex
    this.img = this.imageCollection.results[this.imageIndex]['urls']['raw']
  }


   fetchImage(place:string):void{
    this.http.get(`https://api.unsplash.com/search/photos?page=1&query=${place}&client_id=7_BL6Q7YovCxWTs3QUFCaqRzsjjIRYVBwFoqLTecaMs`).subscribe(
      (val:any) => {
        this.imageCollection = val
        this.img = val.results[this.imageIndex]['urls']['raw']
      }
     )
   }

   closeContainer():void{
    // this.store.dispatch(UserInput({userInput:'',routerStatus:true}))
    this.router.navigate(["/"])

   }
  
  }




