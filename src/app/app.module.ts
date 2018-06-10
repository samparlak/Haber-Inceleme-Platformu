import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { CategoryComponent } from './news/category/category.component';
import { HeadlineComponent } from './news/headline/headline.component';
import { ContentComponent } from './news/content/content.component';
import { OrderModule } from 'ngx-order-pipe';
import {FormsModule} from '@angular/forms';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { CategoryService } from './services/category.service';
import { ContentService } from './services/content.service';
import { HeadlineService } from './services/headline.service';
import { SearchFilterPipe } from './pipes/search-filter.pipe';






@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeadlineComponent,
    ContentComponent,
    CategoryFilterPipe,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OrderModule,
    FormsModule

       
  ],
  providers: [CategoryService,ContentService,HeadlineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
