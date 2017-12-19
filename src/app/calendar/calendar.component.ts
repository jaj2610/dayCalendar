import { Component, OnInit } from '@angular/core';
import { LayOutDayService } from './lay-out-day.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  constructor(private layOutDayService: LayOutDayService) { }

  ngOnInit() {
    this.layOutDayService.initData();
  }

}
