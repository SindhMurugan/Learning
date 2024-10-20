import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { placeDetails } from '../action/app';
import { selectValue } from '../action/app.selector';


export const canChildGuard: CanActivateFn = (route, state) => {

  const store = inject(Store<placeDetails>)
  let returnValue:boolean = false
  store.select(selectValue).subscribe(value => {
    returnValue = !value['routerStatus']
  
  })

  return returnValue;
};
