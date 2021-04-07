import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioYoutubeComponent } from './portfolio-youtube.component';

describe('PortfolioYoutubeComponent', () => {
  let component: PortfolioYoutubeComponent;
  let fixture: ComponentFixture<PortfolioYoutubeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
