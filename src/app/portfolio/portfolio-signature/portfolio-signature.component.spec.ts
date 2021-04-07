import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioSignatureComponent } from './portfolio-signature.component';

describe('PortfolioSignatureComponent', () => {
  let component: PortfolioSignatureComponent;
  let fixture: ComponentFixture<PortfolioSignatureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
