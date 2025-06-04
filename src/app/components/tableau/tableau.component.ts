import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
val:any
pos:any
t:any []=[1,2,6,10,14,25]
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
 InserTab(){
  console.log("bb");
  console.log(this.pos);
  console.log(this.val);
  this.t.splice(this.pos,0,this.val)
  this.cdr.detectChanges()
  console.log(this.t);

  
 }

}
