import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowdispComponent } from './shadowdisp.component';

describe('ShadowdispComponent', () => {
  let component: ShadowdispComponent;
  let fixture: ComponentFixture<ShadowdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
