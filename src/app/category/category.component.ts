import { Component, OnInit, ViewChild } from "@angular/core";
import { OrderPipe } from "ngx-order-pipe";
import { Category } from "./shared/category.model";
import { CategoryService } from "./shared/category.service";


@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  onSelected:String;

  constructor(
    private categoryService: CategoryService,
    private orderPipe: OrderPipe
  ) {}

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

  getSelectOnList(){
    this.categoryService.setCategoryFilter(this.onSelected);
  }

}
