// You will need to add any action that will be called by the components to initialise the state

import { createAction, props } from "@ngrx/store";

export const loadCharacters = createAction('[Load Characters]')

export const loadCharactersSuccess = createAction('[Load Characters Success]',props<{payload:any}>())

export const loadCharactersFailure = createAction('[Load Characters Failure]',props<{errorMessage:any}>())