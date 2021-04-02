import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'yc-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.scss'],
})
export class HomePortfolioComponent implements AfterViewInit {
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

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    const { tag } = this._activatedRoute.snapshot.queryParams;
    if (tag === 'portfolio') {
      setTimeout(() => {
        this._scrollToPortfolio();
      });
    }
  }

  onProject(project) {
    this._scrollToPortfolio(300, () => {
      this._router.navigateByUrl(`portfolio/${project.id}`);
    });
  }

  private _scrollToPortfolio(duration = 0, callback?: Function) {
    $('yc-home').animate(
      {
        scrollTop: $(`#portfolio`).offset().top + $('yc-home')[0].scrollTop + 1,
      },
      duration,
      () => {
        if (callback) {
          callback();
        }
      }
    );
  }
}
