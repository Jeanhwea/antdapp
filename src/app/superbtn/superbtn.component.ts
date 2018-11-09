// childe typescript

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-superbtn',
  templateUrl: './superbtn.component.html',
  styleUrls: ['./superbtn.component.css']
})
export class SuperbtnComponent implements OnInit {

  @Output() superClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onClicked() {
    const time = new Date().toJSON();
    this.superClick.emit(time);
  }

}
