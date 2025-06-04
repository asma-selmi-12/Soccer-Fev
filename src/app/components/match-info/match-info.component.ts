import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
match:any={}
id: any
  constructor(private activatedRoute:ActivatedRoute,private matchService:MatchesService

  ) { }

  ngOnInit(): void {
this.id=this.activatedRoute.snapshot.paramMap.get("id")
this.getMatches()
  }

  getMatches(){
this.matchService.getMatchById(this.id).subscribe((res)=>{
  this.match=res.match
})
  }



// getMatches(){
//   let matches=JSON.parse(localStorage.getItem("matches")||"[]")
//   for (let i = 0; i < matches.length; i++) {
//     if (matches[i].id==this.id) {
//       this.match=matches[i]
//       break
//     }
    
//   }
  
// }
compare(a:any,b:any){
  if (a>b) {
    return ["win","green"]
  } else if(a<b){
    return ["loser","blue"]
  }else{ 
    return ["draw", "yellow"]
    
  }
}
}
