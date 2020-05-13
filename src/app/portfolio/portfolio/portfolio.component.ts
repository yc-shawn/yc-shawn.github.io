import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'yc-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioId:string;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.portfolioId = this._activatedRoute.snapshot.params.portfolioId;
  }

  ngOnInit(): void {
  }

}
