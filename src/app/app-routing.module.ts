import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { TabelMatchesComponent } from './components/tabel-matches/tabel-matches.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TabelTeamsComponent } from './components/tabel-teams/tabel-teams.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { TablePlayerComponent } from './components/table-player/table-player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { OccurenceComponent } from './components/occurence/occurence.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardTeamComponent } from './components/card-team/card-team.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { CardPlayersComponent } from './components/card-players/card-players.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"add-match",component:AddMatchComponent, canActivate:[AuthGuard],data: { role: ['admin'] }},
  {path:"tabel-matches",component:TabelMatchesComponent , canActivate:[AuthGuard],data: { role: ['admin'] }},
  {path:"add-team",component:AddTeamComponent , canActivate:[AuthGuard],data: { role: ['admin'] }},
  {path:"edit-team/:id",component:AddTeamComponent, canActivate:[AuthGuard],data: { role: ['admin'] }},
  {path:"table-teams",component:TabelTeamsComponent , canActivate:[AuthGuard],data: { role: ['admin'] }},
  {path:"add-players",component:AddPlayersComponent , canActivate:[AuthGuard],data: { role: ['admin'] }},
  {path:"table-players",component:TablePlayerComponent , canActivate:[AuthGuard],data: { role: ['admin'] }},
  {path:"edit-match/:id",component:EditMatchComponent , canActivate:[AuthGuard],data: { role: ['admin'] }},
  {path:"match-info/:id",component:MatchInfoComponent , canActivate:[AuthGuard],data: { role: ['admin'] }},
  {path:"signup",component:SignupComponent},
  {path:"signup/admin",component:SignupComponent},
  {path:"matches",component:MatchesComponent, canActivate:[AuthGuard],data: { role: ['admin','user'] }},
  {path:"occurence",component:OccurenceComponent},
  {path:"tab",component:TableauComponent},
  {path:"dashbord",component:DashboardComponent , canActivate:[AuthGuard],data: { role: ['admin']}},
  {path:"edit-players/:id",component:AddPlayersComponent , canActivate:[AuthGuard],data: { role: ['admin'] }},
  {path:"card-team",component:CardTeamComponent, canActivate:[AuthGuard],data: { role: ['admin','user']}},
  {path:"login",component:LoginComponent},
  {path:"card-player",component:CardPlayersComponent},



  



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
