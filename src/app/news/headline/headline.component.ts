import { Component, OnInit} from "@angular/core";
import { HeadlineService } from "../services/headline.service";
import { Headline } from "../models/headline.model";

@Component({
  selector: "app-headline",
  templateUrl: "./headline.component.html",
  styleUrls: ["./headline.component.css"]
})
export class HeadlineComponent implements OnInit {

  headlines: Headline[];
  onSelected:boolean=false;

  constructor(private headlineService: HeadlineService) {}

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

  getPassive(i:string){
    this.onSelected=true;
    document.getElementById(i).style.textDecoration='line-through';
    document.getElementById(i).style.color='lightgray';   
  }

  getSort(){
    /* this.headlines.sort(function(a, b){return (a.date.getDate() - b.date.getDate())}); */
    this.headlines.sort();
  }

}
