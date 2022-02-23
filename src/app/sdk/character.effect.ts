// You need to include the necessary effect to orchistrate the action, reducer and service to fetch the data

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CharacterService } from "./character.service";
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { loadCharactersSuccess } from "./character.action";


@Injectable()
export class CharacterEffect {


	constructor(private chService: CharacterService, private actions$: Actions)
	{
	}


	loadCharacters$ = createEffect(() =>
		this.actions$.pipe(
			ofType('[Load Characters]'),
			//call service
			 mergeMap(() => this.chService.getCharacters().pipe(
				map(characters => loadCharactersSuccess({payload:characters})),
				// catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))

		)
	)));
}
