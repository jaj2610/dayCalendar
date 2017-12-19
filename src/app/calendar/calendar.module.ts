import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CalendarComponent } from './calendar.component';

import { LayOutDayService } from './lay-out-day.service';
import { EventDataService } from './event-data.service';
import { EventComponent } from './event/event.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    CalendarComponent,
    EventComponent
  ],
  providers: [
    LayOutDayService,
    EventDataService
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
