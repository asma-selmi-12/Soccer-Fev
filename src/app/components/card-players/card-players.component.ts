import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-card-players',
  templateUrl: './card-players.component.html',
  styleUrls: ['./card-players.component.css']
})
export class CardPlayersComponent implements OnInit {

  player:any={
   max:0,
   min:0
  }
  players:any=[]
  constructor(private playerService:PlayersService) { }

  ngOnInit(): void {
   this.getAllPlyers()
  }

  getAllPlyers(){
   this.playerService.getAllPlayers().subscribe((res)=>{
this.players=res.players
   })

  }

  filter(){
    console.log(this.player);
    
  
this.playerService.getPlayerByNumber(this.player).subscribe((res)=>{
this.players=res.data

})
    
  }

}
