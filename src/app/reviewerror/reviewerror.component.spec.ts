import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerrorComponent } from './reviewerror.component';

describe('ReviewerrorComponent', () => {
  let component: ReviewerrorComponent;
  let fixture: ComponentFixture<ReviewerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
