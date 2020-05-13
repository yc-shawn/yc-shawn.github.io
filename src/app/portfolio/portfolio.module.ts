import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioLinkedinComponent } from './portfolio-linkedin/portfolio-linkedin.component';


@NgModule({
  declarations: [PortfolioComponent, PortfolioLinkedinComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':portfolioId', component: PortfolioComponent },
    ]),
  ]
})
export class PortfolioModule { }
