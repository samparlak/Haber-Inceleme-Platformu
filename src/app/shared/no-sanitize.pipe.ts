import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({ name: "noSanitize" })
export class NoSanitizePipe implements PipeTransform {
  //DomSanitizer API 'yi kullanarak içeriğimizi güvenli hale getirdim ve güvenlik uyarısını ortadan kaldırdım.
  constructor(private domSanitizer: DomSanitizer) {}
  
  transform(html: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
}
