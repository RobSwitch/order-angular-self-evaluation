import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Item} from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  _urlItems: string;

  constructor(private _http: HttpClient) {
    this._urlItems = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<any> {
    return this._http.get<Item[]>(this._urlItems);
  }

  getItemById(id: string) :Observable<any> {
    return this._http.get(`${this._urlItems}/${id}`)
  }

  updateItem(id: string, item: Item) {
    return this._http.put(`${this._urlItems}/${id}`, item )
  }
  postItem(item: Item) {
    return this._http.post(this._urlItems, item);
  }
}
