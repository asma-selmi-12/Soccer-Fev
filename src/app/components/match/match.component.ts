import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
@Input()match:any ={}
@Output() passIdmatch : EventEmitter <any>=new EventEmitter
  constructor() { }

  ngOnInit(): void {
    
  }

  deleteMatchById(){
    console.log(this.match);
    
    this.passIdmatch.emit(this.match._id)
  }
}
