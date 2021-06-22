import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(items: Array<any>, order: string, column: string): unknown {
    if (items.length <= 1 || !order || !column) return items;
    debugger
    const sorted = items.sort((a, b) => {
      if (order === 'asc') {
        return a[column] < b[column] ? -1 : 0;
      }
      return a[column] > b[column] ? -1 : 0;
    })
    
    return sorted;
  }
}
