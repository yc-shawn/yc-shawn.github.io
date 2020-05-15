import { Component, OnInit, Input, HostBinding } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'yc-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit {


  @Input() @HostBinding('class.yc-home-nav--menu-open') isMenuOpen: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onScrollTo(tag: string) {
    $('html, body').animate({
      scrollTop: $(`#${tag}`).offset().top
   }, 300);
  }
}
