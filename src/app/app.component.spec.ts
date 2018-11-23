import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SuperbtnComponent } from './superbtn/superbtn.component';
import { ShadowdispComponent } from './shadowdisp/shadowdisp.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SuperbtnComponent,
        ShadowdispComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'antdapp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('antdapp');
  }));

  it(`should be clicked, and display result`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const superbtn = fixture.debugElement.nativeElement.querySelector('#superbtn');
    const clrbtn = document.getElementById('clrbtn');
    const disp = fixture.debugElement.nativeElement.querySelector('#disp');
    superbtn.click();
    fixture.detectChanges();

    expect(disp.childElementCount).toEqual(1);
    superbtn.click();
    superbtn.click();
    superbtn.click();
    superbtn.click();
    fixture.detectChanges();

    expect(disp.childElementCount).toEqual(5);
    console.log(disp.children);
    Array.prototype.forEach.call(disp.children, e => {
      expect(e.innerText).toContain('2018');
    });

    clrbtn.click();
    fixture.detectChanges();
    expect(disp.childElementCount).toEqual(0);

  }));

});
