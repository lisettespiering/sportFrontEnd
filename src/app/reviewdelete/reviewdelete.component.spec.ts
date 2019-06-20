import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewdeleteComponent } from './reviewdelete.component';

describe('ReviewdeleteComponent', () => {
  let component: ReviewdeleteComponent;
  let fixture: ComponentFixture<ReviewdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
