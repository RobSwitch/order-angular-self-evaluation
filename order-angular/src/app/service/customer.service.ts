import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  _urlCustomers: string;

  constructor(private _http: HttpClient) {
    this._urlCustomers = `${environment.backendUrl}/customers`;
  }

  getCustomers(): Observable<any> {
    return this._http.get<Customer[]>(this._urlCustomers);
  }
}
