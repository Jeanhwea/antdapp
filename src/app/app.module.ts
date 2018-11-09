import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { IconModule } from '@ant-design/icons-angular';

import { AppComponent } from './app.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule } from '../../node_modules/@angular/forms';
import { SuperbtnComponent } from './superbtn/superbtn.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperbtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
