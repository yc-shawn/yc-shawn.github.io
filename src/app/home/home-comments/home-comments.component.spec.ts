import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCommentsComponent } from './home-comments.component';

describe('HomeCommentsComponent', () => {
  let component: HomeCommentsComponent;
  let fixture: ComponentFixture<HomeCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
