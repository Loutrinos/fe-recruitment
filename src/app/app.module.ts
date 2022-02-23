import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';

import { HomepageComponent } from "./homepage/homepage.component";
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { AvengersListComponent } from './avengers-list/avengers-list.component';
import { StoreModule } from "@ngrx/store";
import { characterReducer } from "./sdk/character.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CharacterEffect } from "./sdk/character.effect";
import {  StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent,
		ThumbnailComponent,
		AvengersListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatCardModule,
		StoreModule.forRoot({characters:characterReducer}),
		EffectsModule.forRoot([CharacterEffect]),
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
