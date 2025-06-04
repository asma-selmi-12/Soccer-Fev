import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(p: any): string {
     let pp=""
   for (let i = 0; i <p.length ; i++) {
    pp=p[i]+pp
    
   }
   console.log(pp);
    return pp ;
  }


}
