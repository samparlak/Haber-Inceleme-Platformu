import { Injectable } from '@angular/core';
import { Headline } from '../models/headline.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeadlineService {

  constructor(private httpClient:HttpClient) { }

  getHeadlines(){
    return this.httpClient.get<Headline[]>("https://dev.matrikswebtrader.com/homework/assets/dummy-service/default.asp?type=newsHeader");
  }

}
