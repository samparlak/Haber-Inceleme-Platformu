import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchFilter",
  pure: false
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, searched: any, propName: any): any {
    const resultArray = [];
    if (searched == "") {
      return value;
    }
    for (const item of value) {
      if (
        item[propName].includes(searched) ||
        item[propName].toLowerCase().includes(searched) ||
        item[propName].toUpperCase().includes(searched)
      ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
