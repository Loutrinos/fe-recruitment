import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCharacters } from '../sdk/character.action';
import { AppState, Character, CharacterState } from '../sdk/character.model';
import { selectFeatureCount } from '../sdk/character.selector';

@Component({
  selector: 'app-avengers-list',
  templateUrl: './avengers-list.component.html',
  styleUrls: ['./avengers-list.component.scss']
})
export class AvengersListComponent implements OnInit {

avengers$:Observable<Character[]> | undefined; 

  constructor(private store:Store<AppState>) { }

  /* 
  dispatch load characther action
  in effects  when action triggered I call service and i dispatch loadACharactersSuccess with payload characters array 
  
  then in reduceer loadCharacterSuccess will update my state,
  then i will fetch it from my state
  */
 ngOnInit(): void {
  // this.avengers$ =  this.chService.getCharacters();
  this.store.dispatch(loadCharacters());

  this.avengers$ = this.store.select(selectFeatureCount)
  
  
  
  }

}
