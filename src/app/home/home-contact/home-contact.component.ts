import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yc-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})
export class HomeContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Submit!')
  }

}
