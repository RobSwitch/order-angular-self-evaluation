import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ItemService} from "../service/item.service";

@Component({
  selector: 'app-create-item',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {

  newItemForm: FormGroup<any> = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    amountStock: ''
  })

  constructor(public itemService: ItemService,
              private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    this.itemService.postItem(this.newItemForm.value).subscribe()
    this.newItemForm.reset();
    alert("Your item has been created");
  }
}
