import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
titre:string="asma"
weather:any={}
icon =''

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.getweatherData().subscribe((res)=>{
      this.weather=res
      this.icon=`https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
      console.log(this.weather);
      
    })
  }



}
