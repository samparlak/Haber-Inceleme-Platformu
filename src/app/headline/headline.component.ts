import { Component, OnInit, TemplateRef } from "@angular/core";
import { OrderPipe } from "ngx-order-pipe";


import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Headline } from "./shared/headline.model";
import { HeadlineService } from "./shared/headline.service";
import { CategoryService } from "../category/shared/category.service";
import { ContentService } from "../shared/content.service";

@Component({
  selector: "app-headline",
  templateUrl: "./headline.component.html",
  styleUrls: ["./headline.component.css"]
})
export class HeadlineComponent implements OnInit {
  headlines: Headline[];
  content: String;
  contentHeadline: String;
  modalRef: BsModalRef;
  order: string = "date";
  filtered: String = "";
  searched: String = "";
  reverse: boolean = true;
  default: boolean = false;
  hover: boolean = false;

  constructor(
    private headlineService: HeadlineService,
    private orderPipe: OrderPipe,
    private categoryService: CategoryService,
    private modalService: BsModalService,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    this.headlineService.getHeadlines().subscribe(
      res => {
        this.headlines = res;
        console.log("Web servisten gelen veriler:");
        console.log(res);
      },
      error => {
        console.error("Web servisten veriyi alamadı.");
        console.error(error);
      }
    );
  }

  rememberMe() {
    for (var i = 0; i < 30; i++) {
      const id = i.toString();
      const valid: string = localStorage.getItem(id);
      if (valid == "true") {
        document.getElementById(id).style.textDecoration = "line-through";
        document.getElementById(id).style.color = "lightgray";
        console.log("id : "+id);
        console.log("Seçildi : "+valid);
      }
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getPassiveAndShowContent(i: string, headline: Headline) {
    document.getElementById(i).style.textDecoration = "line-through";
    document.getElementById(i).style.color = "lightgray";
    localStorage.setItem(i, "true");
    this.contentHeadline = headline.headline;
    const id = headline.id;
    this.contentService.getContents(id).subscribe(
      res => {
        this.content = res.content;
        console.log("Tıklanan haber başlığına ait veriler:");
        console.log(res);
      },
      error => {
        console.error("İçerik görüntülenemedi.");
        console.error(error);
      }
    );
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

  onCategory() {
    this.filtered = this.categoryService.getCategoryFilter();
  }
}
