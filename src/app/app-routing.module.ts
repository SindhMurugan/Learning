import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo:"Map" , pathMatch:'full'},
  {path:'Map' , title:"Map",loadChildren:()=> import("./map/map.module").then(m => m.MapModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
