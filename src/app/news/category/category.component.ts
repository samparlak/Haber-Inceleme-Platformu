import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

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
