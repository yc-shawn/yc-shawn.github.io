import { Component, OnInit, HostBinding, HostListener, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'yc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @HostBinding('class.yc-home--menu-open') isMenuOpen: boolean = false;

  @HostListener('scroll', ['$event'])
  onScroll({ target }: any): void {
    if (target.scrollTop > 200) {
      this.showScrollTop = true;
    } else {
      this.showScrollTop = false;
    }
  };

  showScrollTop: boolean;

  constructor(private _element: ElementRef) { }

  ngOnInit(): void {}

  /**
   * Toogle side menu in small screen
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTop(): void {
    $("yc-home").animate({ scrollTop: 0 }, 300);
  }

}
