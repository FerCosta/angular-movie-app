import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-acc-bar',
  templateUrl: './acc-bar.component.html',
  styleUrls: ['./acc-bar.component.css']
})
export class AccBarComponent implements OnInit {

  mode: Mode = 'light-contrast'
  fontSize = 16
  maxFontSize = 20
  minFontSize = 12
  // fontSizeStorage: Storage = localStorage
  // fontSizeName = 'fontSize'
  // setFontSize = (fontSize) => this.fontSizeStorage.setItem(this.fontSizeName, fontSize)
 
  // @ViewChild('font', { static: true }) font: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.startMode()
  }

  startMode = (): void =>
    this.renderer.addClass(this.document.body, this.mode)

  switchMode() {
    this.document.body.classList.replace(this.mode, this.mode === 'light-contrast' ? (this.mode = 'high-contrast') : (this.mode = 'light-contrast'))
  }

  getFocus() {
    document.getElementById("menu").focus();
  }

  skipToContent() {
    document.getElementById("content").focus();
  }

  // changeFont(operator) {
  //   operator === '+' ? this.fontSize++ : this.fontSize--;
  //    (this.font.nativeElement as HTMLBodyElement).style.fontSize = `${this.fontSize}px`;
       
  // }

  plusFont() {
    if(this.fontSize < this.maxFontSize) {
      this.fontSize++;
      document.body.style.fontSize=this.fontSize+"px";
    }
  }

  minusFont() {
    if(this.fontSize > this.minFontSize) {
      this.fontSize--;
      document.body.style.fontSize=this.fontSize+"px";
    }
  }
  

  resetFont() {
    // let page = document.getElementsByTagName('body');
    // for(let i = 0; i < page.length; i++) {
    //   page[i].style.fontSize = "16px";
    // }
    let body = document.getElementsByTagName('body')[0];
    body.style.fontSize = '16px';
  }

}
export type Mode = 'light-contrast' | 'high-contrast'
