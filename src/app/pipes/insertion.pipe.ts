import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'insertion',
  pure:false
})
export class InsertionPipe implements PipeTransform {

  transform(tab:any[],separator: string = ', '): unknown {

    return tab.join(separator);
  }

}
