import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-acc-bar',
  templateUrl: './acc-bar.component.html',
  styleUrls: ['./acc-bar.component.css']
})
export class AccBarComponent implements OnInit {

  mode: Mode = 'light-contrast'

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

}
export type Mode = 'light-contrast' | 'high-contrast'
