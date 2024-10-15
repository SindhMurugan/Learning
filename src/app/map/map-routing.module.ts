import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadMapComponent } from './load-map/load-map.component';

const routes: Routes = [
  {path:'' , redirectTo:'Home' , pathMatch:'full'},
  {path:'Home' , component:LoadMapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
