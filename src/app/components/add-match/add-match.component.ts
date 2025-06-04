import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css'],
  
})
export class AddMatchComponent implements OnInit {
  match: any = {};
  

  constructor(private router: Router, private mservice: MatchesService,private toastr: ToastrService) {}

  ngOnInit(): void {

  }



  
  addMatch() {

    console.log(this.match);
    
    this.mservice.addMatch(this.match).subscribe((res):any => {
      console.log(res.message);
      if (res.message=="0") {
        return this.toastr.error('Add Match ', 'Invalid data match');
      }
       this.router.navigate(['/tabel-matches']);
    });



    //  let T=JSON.parse(localStorage.getItem("matches")||"[]")
    //  this.match.id=T.length == 0 ? 1 : T.at(-1).id+1
    //  T.push(this.match)
    //  localStorage.setItem("matches",JSON.stringify(T))
    //  this.router.navigate(["/tabel-matches"])
  }
}
