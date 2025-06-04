import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ScorComponent } from './components/scor/scor.component';
import { NewsComponent } from './components/news/news.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabelMatchesComponent } from './components/tabel-matches/tabel-matches.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TabelTeamsComponent } from './components/tabel-teams/tabel-teams.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { TablePlayerComponent } from './components/table-player/table-player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SignupComponent } from './components/signup/signup.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchComponent } from './components/match/match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { VoyellesPipe } from './pipes/voyelles.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { ColorDirective } from './directives/color.directive';
import { OccurenceComponent } from './components/occurence/occurence.component';
import { InsertionPipe } from './pipes/insertion.pipe';
import { TableauComponent } from './components/tableau/tableau.component';
import { HilightDirective } from './directives/hilight.directive';
import { AlertDirective } from './directives/alert.directive';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardTeamComponent } from './components/card-team/card-team.component';
import { LoginComponent } from './components/login/login.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CardPlayersComponent } from './components/card-players/card-players.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    ScorComponent,
    NewsComponent,
    NextMatchComponent,
    VideosComponent,
    BlogComponent,
    ContactComponent,
    AddMatchComponent,
    TabelMatchesComponent,
    AddTeamComponent,
    TabelTeamsComponent,
    AddPlayersComponent,
    TablePlayerComponent,
    EditMatchComponent,
    MatchInfoComponent,
    SignupComponent,
    BannerComponent,
    MatchComponent,
    MatchesComponent,
    ReversePipe,
    VoyellesPipe,
    MyFilterPipe,
    ColorDirective,
    OccurenceComponent,
    InsertionPipe,
    TableauComponent,
    HilightDirective,
    AlertDirective,
    DashboardComponent,
    CardTeamComponent,
    LoginComponent,
    CardPlayersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    SweetAlert2Module.forRoot(),
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
