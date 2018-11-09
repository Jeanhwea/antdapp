import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperbtnComponent } from './superbtn.component';

describe('SuperbtnComponent', () => {
  let component: SuperbtnComponent;
  let fixture: ComponentFixture<SuperbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
