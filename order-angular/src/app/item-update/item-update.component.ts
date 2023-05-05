import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../model/Item";
import {ItemService} from "../service/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit{

  _selectedItem!: Item | any;

  updateItemForm: FormGroup<any>;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.updateItemForm = this.formBuilder.group({
      name: [this._selectedItem ? this._selectedItem.name : ''],
      description: [this._selectedItem ? this._selectedItem.description : ''],
      price: [this._selectedItem ? this._selectedItem.price : ''],
      amountOfStock: [this._selectedItem ? this._selectedItem.amountOfStock : '']
    });

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.itemService.getItemById(id).subscribe(item => this._selectedItem = item)
    this.updateItemForm = this.formBuilder.group({
      name: [this._selectedItem ? this._selectedItem.name : ''],
      description: [this._selectedItem ? this._selectedItem.description : ''],
      price: [this._selectedItem ? this._selectedItem.price : ''],
      amountOfStock: [this._selectedItem ? this._selectedItem.amountOfStock : '']
    });
  }

  onSubmit() {

    this.itemService.updateItem(this._selectedItem.id, this.updateItemForm.value).subscribe()
    this.updateItemForm.reset();
    this.router.navigate([`/item-detail/${this._selectedItem.id}`]);
    alert(`The item with id ${this._selectedItem.id} has been updated`);
  }


}
