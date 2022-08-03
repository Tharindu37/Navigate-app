

import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'sort'
  })
export class SortPipe implements PipeTransform{
  transform(value: any, length: number): any {
    if (value.toString().length>length){
      return value.substring(1,length)+' ...';
    }
    return value;
  }
}
