import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../model/Item";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit{
  itemsArray: Item[] = [];
  searchText: string | any;
  constructor(public itemService: ItemService) {
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.itemsArray = items);
  }

  ngOnInit(): void {
    this.getItems();
  }
}
