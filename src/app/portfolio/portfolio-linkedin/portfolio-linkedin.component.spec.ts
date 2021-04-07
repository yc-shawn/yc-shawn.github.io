import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioLinkedinComponent } from './portfolio-linkedin.component';

describe('PortfolioLinkedinComponent', () => {
  let component: PortfolioLinkedinComponent;
  let fixture: ComponentFixture<PortfolioLinkedinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioLinkedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
