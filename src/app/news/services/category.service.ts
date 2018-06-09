import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';


@Injectable()
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getCategory(){
    return this.httpClient.get<Category[]>("https://dev.matrikswebtrader.com/homework/assets/dummy-service/default.asp?type=newsCategory");
  }

}
