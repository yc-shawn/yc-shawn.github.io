import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomePortfolioComponent } from './home-portfolio.component';

describe('HomePortfolioComponent', () => {
  let component: HomePortfolioComponent;
  let fixture: ComponentFixture<HomePortfolioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
