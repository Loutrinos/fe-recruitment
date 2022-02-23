import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvengersListComponent } from './avengers-list/avengers-list.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "list", component: AvengersListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
