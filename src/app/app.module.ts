import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';

import { OrderModule } from 'ngx-order-pipe';
import {FormsModule} from '@angular/forms';


import { ModalModule } from 'ngx-bootstrap/modal';
import {MarkdownToHtmlModule} from 'markdown-to-html-pipe';


import { CategoryFilterPipe } from './shared/category-filter.pipe';
import { SearchFilterPipe } from './shared/search-filter.pipe';
import { NoSanitizePipe } from './shared/no-sanitize.pipe';
import { CategoryComponent } from './category/category.component';
import { HeadlineComponent } from './headline/headline.component';
import { CategoryService } from './category/shared/category.service';
import { ContentService } from './shared/content.service';
import { HeadlineService } from './headline/shared/headline.service';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeadlineComponent,
    CategoryFilterPipe,
    SearchFilterPipe,
    NoSanitizePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OrderModule,
    FormsModule,
    ModalModule.forRoot(),
    MarkdownToHtmlModule   
  ],
  exports: [ ModalModule],
  providers: [CategoryService,ContentService,HeadlineService],
  bootstrap: [AppComponent]
})
export class AppModule {}
