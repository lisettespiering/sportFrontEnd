import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountreviewComponent } from './accountreview.component';

describe('AccountreviewComponent', () => {
  let component: AccountreviewComponent;
  let fixture: ComponentFixture<AccountreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
