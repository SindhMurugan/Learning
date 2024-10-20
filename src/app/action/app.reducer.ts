import { createReducer, on } from "@ngrx/store"
import {  UserInput } from "./app.actions"
import { placeDetails } from "./app"

export const initialValue ={
    userInput:'',
    routerStatus:true,
}
export const reducer = createReducer(
    initialValue , 
    on(UserInput, (state,action ) => ({
        ...state,
       userInput :action.userInput,
       routerStatus:action.routerStatus
    })

   
   
)
)