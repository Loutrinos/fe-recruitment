import { createSelector } from "@ngrx/store";
import { AppState, Character, CharacterState } from "./character.model";



 const selectCharacters = (state: AppState) => state.characters;

 
export const selectFeatureCount = createSelector(
	selectCharacters,
	(state:CharacterState) => state.list
  );