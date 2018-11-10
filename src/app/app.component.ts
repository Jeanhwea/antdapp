// parent typescript

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'antdapp';

  private superstring: string[];

  constructor() {
    this.superstring = [];
  }

  onSuperClicked(event: string): void {
    // this.superstring = [...this.superstring, event];
    this.superstring.push(event);
  }

  onClearClicked(): void {
    this.superstring = [];
  }

}
