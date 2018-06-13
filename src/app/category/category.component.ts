import { Component, OnInit} from "@angular/core";

import { Category } from "./shared/category.model";
import { CategoryService } from "./shared/category.service";
import { OrderPipe } from "ngx-order-pipe";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  onSelected: String; //Tıkladığımız kategori listesi elemanına ait kategori kodu two-way-binding ile dinlenir.

  constructor(
    private categoryService: CategoryService,
    private orderPipe: OrderPipe
  ) {}

  //Tıkladığımız Kategori listesinin elemanına ait kategori kodu servise aktarılır.
  getSelectOnList() {
    this.categoryService.setCategoryFilter(this.onSelected);
  }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(
      res => {
        this.categories = res;
      },
      error => {
        console.log(error);
      }
    );
  }
}
