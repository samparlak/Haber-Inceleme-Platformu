import { Component, OnInit } from "@angular/core";
import { HeadlineService } from "../services/headline.service";
import { Headline } from "../models/headline.model";
import { OrderPipe } from "ngx-order-pipe";

@Component({
  selector: "app-headline",
  templateUrl: "./headline.component.html",
  styleUrls: ["./headline.component.css"]
})
export class HeadlineComponent implements OnInit {
  headlines: Headline[];
  order: string = "date";
  onSelected: boolean = false; 
  reverse: boolean = true;
  default: boolean = false;
  hover:boolean=false;

  constructor(
    private headlineService: HeadlineService,
    private orderPipe: OrderPipe
  ) {}

  ngOnInit() {
    this.headlineService.getHeadlines().subscribe(
      res => {
        this.headlines = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  getPassive(i: string) {
    this.onSelected = true;
    document.getElementById(i).style.textDecoration = "line-through";
    document.getElementById(i).style.color = "lightgray";
  }

  setOrder() {
    //reverse=true,default=false
    if (this.default == false) {
      this.default = true;
      this.reverse = !this.reverse;
    } else if (this.default == true && this.reverse == false) {
      this.reverse = !this.reverse;
    } else if (this.default == true && this.reverse == true) {
      this.default = false;
    }
  }

  onCategory(){
    
  }

}
