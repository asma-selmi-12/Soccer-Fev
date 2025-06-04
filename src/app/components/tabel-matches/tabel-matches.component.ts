import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-tabel-matches',
  templateUrl: './tabel-matches.component.html',
  styleUrls: ['./tabel-matches.component.css']
})
export class TabelMatchesComponent implements OnInit {
  matches: any = []

  constructor(private router: Router,private matchService:MatchesService) { }

  ngOnInit(): void {
    this.getAllMatches()
  }
  getAllMatches() {
this.matchService.getAllMatches().subscribe((result)=>{
  this.matches=result.data
})



    // this.matches = JSON.parse(localStorage.getItem("matches") || "[]")
  }
  deletMatches(id: any) {
this.matchService.deletMatch(id).subscribe((res)=>{
  console.log(res.message);
  this.getAllMatches()
})


    // this.matches.splice(pos, 1)
    // localStorage.setItem("matches", JSON.stringify(this.matches))

  }
  navigateTo(id: any, path: any) {
    this.router.navigate([path + id])

    console.log(id);

  }
}
