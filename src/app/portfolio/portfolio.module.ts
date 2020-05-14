import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioLinkedinComponent } from './portfolio-linkedin/portfolio-linkedin.component';
import { PortfolioPlateiqComponent } from './portfolio-plateiq/portfolio-plateiq.component';
import { PortfolioLilitofuComponent } from './portfolio-lilitofu/portfolio-lilitofu.component';
import { PortfolioYoutubeComponent } from './portfolio-youtube/portfolio-youtube.component';
import { PortfolioSignatureComponent } from './portfolio-signature/portfolio-signature.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioLinkedinComponent,
    PortfolioPlateiqComponent,
    PortfolioLilitofuComponent,
    PortfolioYoutubeComponent,
    PortfolioSignatureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':portfolioId', component: PortfolioComponent },
    ]),
  ]
})
export class PortfolioModule { }
