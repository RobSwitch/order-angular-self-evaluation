import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from "../model/Customer";

@Pipe({
  name: 'customerSearchFilter'
})
export class CustomerSearchFilterPipe implements PipeTransform {

  transform(customers: Customer[], searchText: string): any[] {
    if (searchText === undefined) {
      return customers
    }
    return customers.filter(customers => customers.lastname.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
  }

}
