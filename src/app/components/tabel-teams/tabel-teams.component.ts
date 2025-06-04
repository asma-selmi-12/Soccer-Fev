import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-tabel-teams',
  templateUrl: './tabel-teams.component.html',
  styleUrls: ['./tabel-teams.component.css']
})
export class TabelTeamsComponent implements OnInit {
teams:any=[]
  constructor(private tsService:TeamsService,private router:Router) { }

  ngOnInit(): void {
    this.getAllTeams()
  }



getAllTeams(){
// this.tsService.getAllTeams().subscribe((res)=>{
//   this.teams=res.data
//   console.log(this.teams);
  
// })

this.tsService.getApiTeams().subscribe((result)=>{
  console.log(result);
  
})
}



deleTeams(id:any){
  

  
  
  this.tsService.deletTeams(id).subscribe((res)=>{
 console.log(res.message);
 this.getAllTeams()
    
  })    

}

navigatTo(id:any,path:any)
  {
this.router.navigate([path+id])

  }





}