import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadMapComponent } from './load-map/load-map.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StoreModule } from '@ngrx/store';
import { placeDetails } from './action/app';
import { reducer } from './action/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    LoadMapComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    StoreModule.forRoot({userInput:reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    
    })

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
