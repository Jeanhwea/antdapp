import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shadowdisp',
  templateUrl: './shadowdisp.component.html',
  styleUrls: ['./shadowdisp.component.css']
})
export class ShadowdispComponent implements OnInit {

  @Input() content: string[];

  constructor() {
    this.content = [];
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('shadowdisp: changed');
  }

}
