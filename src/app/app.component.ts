// parent typescript

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'antdapp';

  private superstring: string;

  constructor() { }

  onSuperClicked(event: string): void {
    console.log(this.superstring);
    this.superstring = event;
  }

}
