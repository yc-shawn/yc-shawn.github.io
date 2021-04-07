import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioPlateiqComponent } from './portfolio-plateiq.component';

describe('PortfolioPlateiqComponent', () => {
  let component: PortfolioPlateiqComponent;
  let fixture: ComponentFixture<PortfolioPlateiqComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPlateiqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPlateiqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
