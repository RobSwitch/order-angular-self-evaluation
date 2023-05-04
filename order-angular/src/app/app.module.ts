import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import { HeaderComponent } from './header/header.component';
import {NgOptimizedImage} from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import {ItemService} from "./service/item.service";
import { HttpClientModule } from '@angular/common/http';
import { ItemSearchFilterPipe } from './item-search-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateItemComponent } from './create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    HeaderComponent,
    FooterComponent,
    ItemSearchFilterPipe,
    CreateItemComponent
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
export class AppModule { }
