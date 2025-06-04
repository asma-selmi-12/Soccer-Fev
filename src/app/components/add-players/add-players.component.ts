import { NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css'],
})
export class AddPlayersComponent implements OnInit {
  player: any = {};
  id: any;
  image: any;
  imagePreview: any;
  title: any = 'Add-Player';
  teams: any = [];

  constructor(
    private plyerService: PlayersService,
    private teamService: TeamsService,
    private toster: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllTeams();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'Edite-player';
      this.getPlayerById();
    }
  }

  // GET ALL TEAMS
  getAllTeams() {
    this.teamService.getAllTeams().subscribe((result) => {
      console.log(result);

      this.teams = result.data;
      console.log('respense', result.data);
      console.log('tabel tems', this.teams);
    });
  }

  getPlayerById() {
    this.plyerService.getPlayersById(this.id).subscribe((res) => {
      this.player = res.player;
      this.imagePreview = this.player.img;
      console.log(this.player);
    });
  }

  addEditPlayers() {
    if (this.id) {
      console.log('player updated', this.player);

      this.plyerService
        .updatePlayers(this.player, this.image)
        .subscribe((res) => {
          console.log(res.message);
          this.router.navigate(['/dashbord']);
        });
    } else {
      console.log('bbb');
      console.log('player avant', this.player);

      // Ajoute l’image au dataform

      // pour avoir le contenu de form data

      this.plyerService.addPlayers(this.player, this.image).subscribe((res) => {
        console.log(res.message);
        if (res.message == '0') {
          this.toster.error('Add Player', 'invalid data player');
        } else {
          //  this.router.navigate(['/dashbord'])
        }
      });
    }

    //   console.log("bnj");
    //   console.log(this.nameTeam);

    //  let teams=JSON.parse(localStorage.getItem("teams")||"[]")
    //  let  findteam:Number=0

    // for (let i = 0; i < teams.length; i++) {
    //   if (teams[i].nameTeam==this.nameTeam) {
    //     findteam=teams[i].id
    //     break
    //   }

    // }
    //  console.log(findteam);

    //   let players=JSON.parse(localStorage.getItem("players")||"[]")
    //   this.player.id=players.length == 0 ? 1 : players.at(-1).id+1
    //   this.player.idTeam=findteam
    //   players.push(this.player)
    //   localStorage.setItem("players",JSON.stringify(players))
    // }
  }

  // recupére le file selctinner
  onFileSelected(event: any) {
    const file = event.target.files[0];
    // teste pour la securiter
    if (file.size > 1024) {
      console.log('sizeerr');
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "taille d'image invalid!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    } else {
      if (
        file.type == 'image/png' ||
        file.type == 'image/gif' ||
        file.type == 'image/jpeg'
      ) {
        this.image = file;
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result as string; // Assigner l'URL de l'image à imagePreview
        };
        reader.readAsDataURL(file);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "type d'image invalid!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        console.log('erreur');
      }
    }
  }
  // if (file.type=='image/png' || file.type=='image/gif' ||file.type=='image/jpeg' ) {
  //   // Pour afficher un aperçu de l'image
  //   this.image=file
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.imagePreview = reader.result as string; // Assigner l'URL de l'image à imagePreview
  //   };
  //   reader.readAsDataURL(file); // Lire le fichier et obtenir l'URL en base64
  // } else {
  //   console.warn('Aucun fichier sélectionné ou type fichier invalid.');
  // }
}
