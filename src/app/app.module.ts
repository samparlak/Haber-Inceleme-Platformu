import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { CategoryComponent } from './news/category/category.component';
import { HeadlineComponent } from './news/headline/headline.component';
import { ContentComponent } from './news/content/content.component';
import { CategoryService } from './news/services/category.service';
import { ContentService } from './news/services/content.service';
import { HeadlineService } from './news/services/headline.service';
import { OrderModule } from 'ngx-order-pipe';
import {FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeadlineComponent,
    ContentComponent
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
