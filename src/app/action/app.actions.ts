import { createAction, props } from "@ngrx/store";
import { placeDetails } from "./app";


export const UserInput = createAction("[userInput] userInput" , props<placeDetails>())