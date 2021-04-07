import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeAboutmeComponent } from './home-aboutme.component';

describe('HomeAboutmeComponent', () => {
  let component: HomeAboutmeComponent;
  let fixture: ComponentFixture<HomeAboutmeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAboutmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
