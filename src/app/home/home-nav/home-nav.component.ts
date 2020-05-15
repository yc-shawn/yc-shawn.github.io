import { Component, OnInit, Input, HostBinding } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'yc-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit {


  @Input() @HostBinding('class.yc-home-nav--menu-open') isMenuOpen: boolean;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  onScrollTo(tag: string) {
    const tagElement = $(`#${tag}`);
    if (tagElement) {
      $('html, body').animate({
        scrollTop: tagElement.offset().top
      }, 300, () => {
        this._router.navigate([], {
          queryParams: { tag },
          queryParamsHandling: 'merge',
          replaceUrl: true,
        });
      });
    }
  }
}
