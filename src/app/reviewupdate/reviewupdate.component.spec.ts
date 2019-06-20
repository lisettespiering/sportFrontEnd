import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewupdateComponent } from './reviewupdate.component';

describe('ReviewupdateComponent', () => {
  let component: ReviewupdateComponent;
  let fixture: ComponentFixture<ReviewupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
