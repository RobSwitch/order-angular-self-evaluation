import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../model/Item";
import {ItemService} from "../service/item.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit{
  @Input()item?: Item;

  _selectedItem!: Item | any;
  updateItemForm: FormGroup<any> = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    amountStock: ''
  })

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
  }

  onSubmit() {
    this.itemService.updateItem(this._selectedItem.id, this.updateItemForm.value).subscribe()
    this.updateItemForm.reset();
    alert("Your item has been updated");
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.itemService.getItemById(id).subscribe(item => this._selectedItem = item)
  }
}
