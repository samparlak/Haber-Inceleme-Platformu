import { Component, OnInit, TemplateRef } from "@angular/core";

import { HeadlineService } from "./shared/headline.service";
import { CategoryService } from "../category/shared/category.service";
import { ContentService } from "../shared/content.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { OrderPipe } from "ngx-order-pipe";
import { Headline } from "./shared/headline.model";

@Component({
  selector: "app-headline",
  templateUrl: "./headline.component.html",
  styleUrls: ["./headline.component.css"]
})
export class HeadlineComponent implements OnInit {
  headlines: Headline[];
  modalRef: BsModalRef;   //Bootstrapın Modal componentlerini kullanabilmek için tanımlandı.
  content: String;        //Haber içeriği
  contentHeadline: String;//Haber başlığı
  filtered: String = "";  //Servisten gelen kategori kodu set edildi ve kategori filtrelemek için kullanıldı.
  searched: String = "";  //arama motoruna girilen değer dinlendi ve arama sonuçları filtrelemek için kullanıldı.
  reverse: boolean = true;//saati zamana göre azalan,artan ve ▼ ▲ şeklinde switchlemek için kullanıldı.
  default: boolean = false;// ▼ ▲ görünümlerini ortaya çıkarmak için kullanıldı.

  constructor(
    private headlineService: HeadlineService,
    private orderPipe: OrderPipe,
    private categoryService: CategoryService,
    private modalService: BsModalService,
    private contentService: ContentService
  ) {}

  //Daha önce tıklayarak görünümünü değiştirdiğimiz kayıtlı haber başlıkları geri getirilir.
  rememberMe() {
    for (var i = 0; i < 30; i++) {
      const id = i.toString(); //local storagede kayıtlı keylerimiz string türündedir.Çevirme işlemi yapılır.
      const valid: string = localStorage.getItem(id); //keylere karşılık gelen value'ler çağırılır.
      if (valid == "true") {
        /* tıklanan haberler için keylere karşılık gelen value 'true' dur.
        Value değeri 'true' olan id'ler saptanıp okundu olarak görünümleri değiştirilir. */
        document.getElementById(id).style.textDecoration = "line-through";
        document.getElementById(id).style.color = "lightgray";
        console.log("id : " + id);
        console.log("Seçildi : " + valid);
      }
    }
  }

  //Tıklanan habere ait içeriği yeni pencerede göstermek için kullanıldı.
  openModal(template: TemplateRef<any>) {
    //Html içinde #template olarak tanımladığımız içerik gösterilir.
    this.modalRef = this.modalService.show(template);
  }

  //Tıklanan haberin görünümü değiştirilir ve haber içeriği servisten çağırılır.
  getPassiveAndShowContent(i: string, headline: Headline) {
    document.getElementById(i).style.textDecoration = "line-through";
    document.getElementById(i).style.color = "lightgray";
    localStorage.setItem(i, "true");//Tıklanan haberin kimliği localstoragede set edilir.Value 'true' atanır.
    this.contentHeadline = headline.headline;
    const id = headline.id;//habere ait id,içeriğin web servisten çağırılması için atanır.
    this.contentService.getContents(id).subscribe(
      res => {
        this.content = res.content;//Servisten çağırılan içerik content'e atanır.
        console.log("Tıklanan haber başlığına ait veriler:");
        console.log(res);
      },
      error => {
        console.error("İçerik görüntülenemedi.");
        console.error(error);
      }
    );
  }

  //Saat aksiyonları
  setOrder() {
    //reverse=true,default=false => (zamana göre azalan,▼ ▲ saklı.)
    if (this.default == false) {
      this.default = true;
      this.reverse = !this.reverse; //reverse=false,default=true => (zamana göre artan,▲ gösterildi.)
    } else if (this.default == true && this.reverse == false) {
      this.reverse = !this.reverse; //reverse=true,default=true => (zamana göre azalan,▼ gösterildi.)
    } else if (this.default == true && this.reverse == true) {
      this.default = false;         //reverse=true,default=false => (zamana göre azalan,▼ ▲ saklı.)
    }
  }

  //Tıkladığımız kategori kodu getirildi,filtered içine set edildi.
  onCategory() {
    this.filtered = this.categoryService.getCategoryFilter();
  }

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
}
