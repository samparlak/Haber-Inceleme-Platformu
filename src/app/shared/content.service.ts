import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Content } from './content.model';

@Injectable()
export class ContentService {

  constructor(private httpClient:HttpClient) {}

  getContents(id:number){
    return this.httpClient.get<Content>("https://dev.matrikswebtrader.com/homework/assets/dummy-service/newsDetail.asp?id="+id);
  }

}
