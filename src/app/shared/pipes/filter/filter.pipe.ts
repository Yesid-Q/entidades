import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: { [key: string]: any }[], propertyName: string, asc: boolean = true): any[] {
    if(!list.length) {
      return list;
    }
    
    if (!list[0].hasOwnProperty(propertyName)) {
      return list;
    }

    return list.sort((a, b ) => {
      if(asc) {
        return a[propertyName].localeCompare(b[propertyName]);
      }
      return b[propertyName].localeCompare(a[propertyName]);
    });
  }

}
