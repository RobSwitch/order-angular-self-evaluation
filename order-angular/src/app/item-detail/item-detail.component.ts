import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../model/Item";
import {ItemService} from "../service/item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{
  @Input()item?: Item;

  _selectedItem!: Item | any;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.itemService.getItemById(id).subscribe(item => this._selectedItem = item)
  }
}
