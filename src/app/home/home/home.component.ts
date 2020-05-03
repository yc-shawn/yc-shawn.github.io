import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'yc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @HostBinding('class.yc-home--menu-open') isMenuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  /**
   * Toogle side menu in small screen
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
