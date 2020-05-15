import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'yc-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects = [
    {
      id: 'linkedin',
      external: false,
    },
    {
      id: 'plateiq',
      external: false,
    },
    {
      id: 'lilitofu',
      external: false,
    },
    {
      id: 'chatapp',
      external: true,
      link: 'https://yc-shawn.github.io/real-time-chat/',
    },
    {
      id: 'craigslist',
      external: true,
      link: 'https://yc-shawn.github.io/craigslist-housing',
    },
    {
      id: 'shoppingcart',
      external: true,
      link: 'https://yc-shawn.herokuapp.com/shoppingcart',
    },
    {
      id: 'spotify',
      external: true,
      link: 'https://yc-shawn.github.io/spotify',
    },
    {
      id: 'youtube',
      external: false,
    },
    {
      id: 'signature',
      external: false,
    },
  ];
  portfolioId:string;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.portfolioId = this._activatedRoute.snapshot.params.portfolioId;
  }

  ngOnInit(): void {
  }

}
