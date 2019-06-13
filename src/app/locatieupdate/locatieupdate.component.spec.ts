import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatieupdateComponent } from './locatieupdate.component';

describe('LocatieupdateComponent', () => {
  let component: LocatieupdateComponent;
  let fixture: ComponentFixture<LocatieupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatieupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatieupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
