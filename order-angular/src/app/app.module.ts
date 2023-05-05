import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ItemOverviewComponent} from './item-overview/item-overview.component';
import {HeaderComponent} from './header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {FooterComponent} from './footer/footer.component';
import {ItemService} from "./service/item.service";
import {HttpClientModule} from '@angular/common/http';
import {ItemSearchFilterPipe} from './filter/item-search-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ItemCreateComponent} from './item-create/item-create.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {ItemUpdateComponent} from './item-update/item-update.component';
import {CustomerOverviewComponent} from './customer-overview/customer-overview.component';
import { CustomerSearchFilterPipe } from './filter/customer-search-filter.pipe';
import { CustomerCreateComponent } from './customer-create/customer-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    HeaderComponent,
    FooterComponent,
    ItemSearchFilterPipe,
    ItemCreateComponent,
    ItemDetailComponent,
    ItemUpdateComponent,
    CustomerOverviewComponent,
    CustomerSearchFilterPipe,
    CustomerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
