import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeststarsComponent } from './teststars.component';

describe('TeststarsComponent', () => {
  let component: TeststarsComponent;
  let fixture: ComponentFixture<TeststarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeststarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeststarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
