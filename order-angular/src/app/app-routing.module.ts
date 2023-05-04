import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {ItemCreateComponent} from "./item-create/item-create.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {ItemUpdateComponent} from "./item-update/item-update.component";

const routes: Routes = [{path:'', component: ItemOverviewComponent},
  {path:'create-item', component: ItemCreateComponent},
  {path:'item-detail/:id', component: ItemDetailComponent},
  {path:'item-update/:id', component: ItemUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
