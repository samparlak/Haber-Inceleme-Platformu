import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter',
  pure:false
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: any, filtered: any,propName:any): any {
    const resultArray=[];
    if(filtered=='' || filtered=='all' ){
      return value;
    }
    for(const item of value){
      if(item[propName]==filtered){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
