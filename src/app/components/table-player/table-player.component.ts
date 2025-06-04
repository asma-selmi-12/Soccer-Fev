import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-player',
  templateUrl: './table-player.component.html',
  styleUrls: ['./table-player.component.css']
})
export class TablePlayerComponent implements OnInit {
players:any=[]
  constructor(private playerService:PlayersService,private route:Router) { }

  ngOnInit(): void {this.getAllPlyer()
  }


getAllPlyer(){
 this.playerService.getAllPlayers().subscribe((res)=>{
  console.log(res.players);
  
  this.players=res.players
 })
}


deletPlayer(id:any){

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(id);
      this.playerService.deletPlayers(id).subscribe((res)=>{
        console.log(res.message);
        this.getAllPlyer()
      })
      
      Swal.fire({
        title: "Deleted!",
        text: "Your player has been deleted.",
        icon: "success"
      });
    }
  });
  




}

editPlayer(id:any,path:any){
  this.route.navigate([path+id])
  
 
  
}


}
