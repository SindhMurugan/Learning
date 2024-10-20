import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.opentripmap.com/0.1/en/places';
  private apiKey = '5ae2e3f221c38a28845f05b61135c600d5c51d88d0f5aa2';

  constructor(private http:HttpClient) { }

  fetchInfo(value:string):Observable<object>{
    return this.http.get( `https://nominatim.openstreetmap.org/search?q=${value}&format=json`).pipe(map((val:any) => val[0]))

  }

  fetchPlaceDetails(value:string):Observable<object>{
    return this.http.get(`${this.apiUrl}/geoname?name=${'INDIA'}&apikey=${this.apiKey}`)
  }
}
