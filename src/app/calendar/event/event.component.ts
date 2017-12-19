import { Component, OnInit, Input } from '@angular/core';
import { Layout } from '../layout';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event: Layout;

  public eventStyle = {};

  constructor() { }

  ngOnInit() {
    this.eventStyle = {
      'width': this.event.width + "px",
      'height': (this.event.end - this.event.start) + "px",
      'top': this.event.topPosition + "px",
      'left': (this.event.leftPosition + 10) + "px",
      'position': "absolute"
    };
  }

}
