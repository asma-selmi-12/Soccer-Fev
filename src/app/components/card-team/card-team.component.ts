import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.css']
})
export class CardTeamComponent implements OnInit {


  teams:any=[]
  playersName:any[]=[]
 
  
  
  constructor(private tservics:TeamsService) { }

  ngOnInit(): void {
this.getAllTeams()

  }

  getAllTeams(){
this.tservics.getAllTeams().subscribe((res)=>{
this.teams=res.data
console.log(this.teams);

})
  }
 

 

}
