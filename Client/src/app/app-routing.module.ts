import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSportComponent } from "./add-sport/add-sport.component";
import { AddSchoolComponent } from "./add-school/add-school.component";
import { AddParticipantComponent } from "./add-participant/add-participant.component";

const routes: Routes = [
  {path:'', redirectTo:'/addsports', pathMatch:'full'},
  {path:'addsports', component: AddSportComponent},
  {path:'addschool', component: AddSchoolComponent},
  {path:'addparticipant', component: AddParticipantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
