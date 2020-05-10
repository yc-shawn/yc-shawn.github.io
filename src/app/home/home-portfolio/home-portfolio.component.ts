import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yc-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.scss']
})
export class HomePortfolioComponent implements OnInit {
  projects = [
    {
      id: 'linkedin'
    },
    {
      id: 'plateiq'
    },
    {
      id: 'lilitofu'
    },
    {
      id: 'chatapp'
    },
    {
      id: 'craigslist'
    },
    {
      id: 'shoppingcart'
    },
    {
      id: 'spotify'
    },
    {
      id: 'youtube'
    },
    {
      id: 'signature'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
