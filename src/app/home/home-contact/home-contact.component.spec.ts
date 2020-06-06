import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContactComponent } from './home-contact.component';

describe('HomeContactComponent', () => {
  let component: HomeContactComponent;
  let fixture: ComponentFixture<HomeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
