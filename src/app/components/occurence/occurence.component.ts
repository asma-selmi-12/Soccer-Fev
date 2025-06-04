import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-occurence',
  templateUrl: './occurence.component.html',
  styleUrls: ['./occurence.component.css']
})
export class OccurenceComponent implements OnInit {
t:any=[]


  constructor() { }

  ngOnInit(): void {
  }

  occurence(){
    console.log("bnj");
    console.log(this.t);
    let s:Number=0
for (let i = 0; i <this.t.length; i++) {
  
  
   let extrai=this.t.slice(0,i)
   console.log(extrai);
   let findindex=extrai.indexOf(this.t[i])
   console.log(findindex);
  if (findindex==-1) {
    let result = this.t.split('').filter((w :string)=> w == this.t[i])
    console.log(result);
    s=s+result.length
    alert(result.length)
    
  }
  
}
alert(s)
    
  }
}
