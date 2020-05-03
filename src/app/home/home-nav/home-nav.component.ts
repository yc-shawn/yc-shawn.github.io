import { Component, OnInit, Input, HostBinding } from '@angular/core';

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

}
