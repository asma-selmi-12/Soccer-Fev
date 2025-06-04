import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voyelles'
})
export class VoyellesPipe implements PipeTransform {

  transform(ch:any):string {
    let chaine=""
    for (let i = 0; i < ch.length; i++) {
     if (ch[i] == 'a' || ch[i] == 'u' || ch[i] == 'y' || ch[i] == 'e'  || ch[i] == 'i') {
      chaine=chaine+"*"
     }else{
      chaine=chaine+ch[i]
     }
      
    }
    return  chaine;
  }

}
