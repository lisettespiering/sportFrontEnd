import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatiecreateComponent } from './locatiecreate.component';

describe('LocatiecreateComponent', () => {
  let component: LocatiecreateComponent;
  let fixture: ComponentFixture<LocatiecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatiecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatiecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
