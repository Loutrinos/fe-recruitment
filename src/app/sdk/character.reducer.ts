// You need to add here the code necessary to save the data in the state

import { createReducer,on } from "@ngrx/store";
import { loadCharactersSuccess } from "./character.action";
import { AppState, CharacterState } from "./character.model";

const initialState :CharacterState= {
    list:[]
}

export const characterReducer = createReducer(initialState,
    on(loadCharactersSuccess,(state,action)=>({...state,list:action.payload})))