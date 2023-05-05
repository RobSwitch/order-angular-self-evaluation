import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {ItemCreateComponent} from "./item-create/item-create.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {ItemUpdateComponent} from "./item-update/item-update.component";
import {CustomerOverviewComponent} from "./customer-overview/customer-overview.component";

const routes: Routes = [{path:'', component: ItemOverviewComponent},
  {path:'create-item', component: ItemCreateComponent},
  {path:'item-detail/:id', component: ItemDetailComponent},
  {path:'item-update/:id', component: ItemUpdateComponent},
  {path:'customer-overview', component: CustomerOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
