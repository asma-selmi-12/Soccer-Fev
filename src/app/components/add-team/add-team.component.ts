import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
})
export class AddTeamComponent implements OnInit {
  team: any = {};
  id: any;
  title: any = 'Add Team';
  constructor(
    private teamService: TeamsService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    if (this.id) {
      this.title = 'Edite Teams';
      console.log(this.title);

      this.getTeamById();
    }
  }

  addEditTeam() {
    if (this.id) {
      console.log(this.team);

      this.teamService.updateTeams(this.team).subscribe((res) => {
        console.log(res.message);
        if (res.message == '0') {
          console.log(res.message);

          this.toastr.error('edit team ', 'Invalid data Team');
        } else {
          this.router.navigate(['/dashbord']);
        }
      });
    } else {
      this.teamService.addTeams(this.team).subscribe((res): any => {
        console.log(res.message);
        if (res.message == '0') {
          console.log(res.message);

          this.toastr.error('Add team ', 'Invalid Team');
        } else {
          this.router.navigate(['/dashbord']);
        }
      });
    }

    // let teams=JSON.parse(localStorage.getItem("teams")||"[]")
    // this.team.id=teams.length==0 ? 1 : teams.at(-1).id+1
    // teams.push(this.team)
    // localStorage.setItem("teams",JSON.stringify(teams))
  }

  getTeamById() {
    this.teamService.getTeamsById(this.id).subscribe((res) => {
      this.team = res.data;
    });
  }
}
