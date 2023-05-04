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

  postItem(item: Item) {
    return this._http.post(this._urlItems, item);
  }
}
