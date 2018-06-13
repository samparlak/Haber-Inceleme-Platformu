import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CategoryComponent } from "./category/category.component";
import { HeadlineComponent } from "./headline/headline.component";
import { OrderModule } from "ngx-order-pipe"; //Saat ve kategori sıralaması için
import { ModalModule } from "ngx-bootstrap/modal";//Habere tıklandıgında içeriği popup olarak göstermesi için
import { MarkdownToHtmlModule } from "markdown-to-html-pipe";//Servisten gelen Md formatını dönüştürmesi için
import { CategoryService } from "./category/shared/category.service";
import { ContentService } from "./shared/content.service";
import { HeadlineService } from "./headline/shared/headline.service";
import { CategoryFilterPipe } from "./shared/category-filter.pipe";
import { SearchFilterPipe } from "./shared/search-filter.pipe";
import { NoSanitizePipe } from "./shared/no-sanitize.pipe";//İçeriği güvenli hale getirmesi için

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeadlineComponent,
    CategoryFilterPipe,
    SearchFilterPipe,
    NoSanitizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OrderModule,
    FormsModule,
    ModalModule.forRoot(),
    MarkdownToHtmlModule
  ],
  exports: [ModalModule],
  providers: [CategoryService, ContentService, HeadlineService],
  bootstrap: [AppComponent]
})
export class AppModule {}
