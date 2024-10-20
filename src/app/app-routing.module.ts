import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadMapComponent } from './load-map/load-map.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { canChildGuard } from './auth/can-child.guard';


const routes: Routes = [
  {path:'' , redirectTo:"Map" , pathMatch:'full'},
  {path:'Map' , title:"Map",component:LoadMapComponent , canActivateChild:[canChildGuard],
    children:[
    {path:'datails' , component:PlaceDetailsComponent }
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
