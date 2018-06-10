import { Component, OnInit, ViewChild } from "@angular/core";
import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";
import { OrderPipe } from "ngx-order-pipe";

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
    this.categoryService.setCategoryFilter(this.onSelected);
  }

}
