import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-match',
  templateUrl: './next-match.component.html',
  styleUrls: ['./next-match.component.css']
})
export class NextMatchComponent implements OnInit {
@Input()team:any={}
@Input()player:any


  constructor() { }

  ngOnInit(): void {
  }

}
