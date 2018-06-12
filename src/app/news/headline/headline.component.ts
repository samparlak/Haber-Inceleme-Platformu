import { Component, OnInit, TemplateRef } from "@angular/core";
import { OrderPipe } from "ngx-order-pipe";
import { Headline } from "../../models/headline.model";
import { HeadlineService } from "../../services/headline.service";
import { CategoryService } from "../../services/category.service";

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ContentService } from "../../services/content.service";
import { Content } from "../../models/content.model";


@Component({
  selector: "app-headline",
  templateUrl: "./headline.component.html",
  styleUrls: ["./headline.component.css"]
})
export class HeadlineComponent implements OnInit {
  headlines: Headline[];
  content:String;
  contentHeadline:String;
  modalRef: BsModalRef;
  order: string = "date";
  filtered:String="";
  searched:String="";
  onSelected: boolean = false; 
  reverse: boolean = true;
  default: boolean = false;
  hover:boolean=false;
  

  constructor(
    private headlineService: HeadlineService,
    private orderPipe: OrderPipe,
    private categoryService:CategoryService,
    private modalService: BsModalService,
    private contentService:ContentService
  ) {}

  ngOnInit() {
    this.headlineService.getHeadlines().subscribe(
      res => {
        this.headlines = res;
        console.log("Web servisten gelen veriler:");
        console.log(res);
      },
      error => {
        console.error("Web servisten veriyi alamadı.")
        console.error(error);
      }
    );
    
   /*  this.categoryService.getCategory().subscribe(
      res => {
        this.categories = res;
      },
      error => {
        console.log(error);
      }
    ); */
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); 
  }

  getPassiveAndShowContent(i: string,headline:Headline) {
    this.onSelected = true;
    document.getElementById(i).style.textDecoration = "line-through";
    document.getElementById(i).style.color = "lightgray";
    this.contentHeadline=headline.headline;
    const id=headline.id;
    this.contentService.getContents(id).subscribe((res)=>{
      this.content=res.content;
      console.log("Tıklanan haber başlığına ait veriler:")
      console.log(res);

    },
    (error)=>{
      console.error("İçerik görüntülenemedi.")
      console.error(error);
    })
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
    this.filtered=this.categoryService.getCategoryFilter();
  }

}
