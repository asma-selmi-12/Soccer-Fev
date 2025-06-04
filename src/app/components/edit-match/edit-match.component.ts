import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css'],
})
export class EditMatchComponent implements OnInit {
  match: any = {};
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matchservice: MatchesService,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getMatcheById();
  }

  getMatcheById() {
    console.log('here into composant', this.id);

    this.matchservice.getMatchById(this.id).subscribe((res) => {
      console.log(res.match.scoreOne);
      this.match = res.match;
    });

    // let matches=JSON.parse(localStorage.getItem("matches")||"[]")
    // for (let i = 0; i < matches.length; i++) {
    //   if (matches[i].id==this.id) {
    //     this.match=matches[i]
    //   }
    // }
  }
  editMatch() {
    this.matchservice.updateMatch(this.match).subscribe((res)=>{
      console.log(res);
      if (res.message=="0") {
        this.toastr.error('edit match ', 'Invalid data match');
      } else {
        // this.router.navigate(['/tabel-matches'])
      }
      
    })
  }
}

// let matches = JSON.parse(localStorage.getItem('matches') || '[]');
// for (let i = 0; i < matches.length; i++) {
//   if (matches[i].id == this.id) {
//     matches[i] = this.match;
//   }
// }
// localStorage.setItem('matches', JSON.stringify(matches));
// this.router.navigate(['/tabel-matches']);
