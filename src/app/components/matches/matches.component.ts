import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent implements OnInit {
  matches: any = [];
  term: any;
  constructor(private matchservice: MatchesService) {}

  ngOnInit(): void {
    //  this.matches=JSON.parse(localStorage.getItem("matches")||"[]")
    this.getAllMatches();



    
    

  }

  getAllMatches() {
    this.matchservice.getAllMatches().subscribe((res) => {
      this.matches = res.data;
    });
  }

  deletMatch(id: any) {
    console.log(id);
    this.matchservice.deletMatch(id).subscribe((res) => {
      console.log(res.message);
      this.getAllMatches()
    });
    
  }

  //   deletMatch(id:any){
  // for (let i = 0; i < this.matches.length; i++) {
  //   if (this.matches[i].id==id) {
  //     this.matches.splice(i,1)
  //     localStorage.setItem("matches",JSON.stringify(this.matches))

  //   }

  // }
  //   }
}
