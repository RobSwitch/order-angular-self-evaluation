import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../model/Item";

@Pipe({
  name: 'itemSearchFilter'
})
export class ItemSearchFilterPipe implements PipeTransform {

  transform(items: Item[], searchText: string): any[] {
    if (searchText === undefined) {
      return items
    }
    return items.filter(items => items.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
  }

}
