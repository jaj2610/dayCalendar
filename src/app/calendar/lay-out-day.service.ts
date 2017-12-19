import { Injectable } from '@angular/core';
import { Layout } from './layout';
import { EventDataService } from './event-data.service';

@Injectable()
export class LayOutDayService {
  public eventData = {};
  public eventLayout = [];

  constructor(private eventDataService: EventDataService) { }
  public testEvents = {"-K2rlJ-nkJBtkLHL0QmO":{"end":150,"start":30},"-K2rlKbFfXz3OEoxRBJU":{"end":650,"start":540},"-K2rlLd-VjcZ_rtBlVuM":{"end":620,"start":560},"-K2rlMb_GD98QiMk8zGF":{"end":700,"start":630}};

  public initData() {
    this.eventDataService.getData().subscribe(data => { this.eventData = data; this.setLayout(); }, error => console.log(error));
  }

  private setLayout() {
    this.eventLayout = this.layOutDay(this.eventData);
  }

  /**
  * Lays out events for a single day
  *
  * @param array  events   An array of event objects. Each event object consists of a start and end
  *                        time  (measured in minutes) from 9am, as well as a unique id. The
  *                        start and end time of each event will be [0, 720]. The start time will
  *                        be less than the end time.
  *
  * @return array  An array of event objects that has the width, the left and top positions set, in addition to the id,
  *                start and end time. The object should be laid out so that there are no overlapping
  *                events.
  *
  */
  public layOutDay(events) {
    const totalWidth = 600; // total event width available
    const startTime = 0;
    const endTime = 720;
    const eventPositions: Layout[] = [];
    const times = [];

    // find conflicts

    // push event id into each time
    for (let i in events) {
      for (let j = events[i].start; j < events[i].end; j++) {
        times[j] = times[j] || []; // ensure initialization
        times[j].push(i);
      }
    }

    // find number of conflicts each event has
    times.forEach(time => {
      if (time.length > 1) {
        let horizontalStep = 0;
        time.forEach(event => {
          // store largest # of conflicts for each event
          if (!events[event].conflicts || time.length > events[event].conflicts) {
            events[event].conflicts = time.length;
          }

          // give event a horizontal placement to later determine leftPosition
          // logic needs work - may not work with events in certain order
          if (!events[event].horizontal) {
            events[event].horizontal = horizontalStep;
          }

          horizontalStep++;
        });
      }
    });

    for (let event in events) {
      const finalEvent: Layout = {
        id: event,
        start: events[event].start,
        end: events[event].end,
        width: totalWidth, // default value
        leftPosition: 0, // default value
        topPosition: events[event].start
      };

      if (events[event].conflicts) {
        finalEvent.width = totalWidth / events[event].conflicts;
      } else {
        finalEvent.width = totalWidth;
      }

      if (events[event].horizontal) {
        finalEvent.leftPosition = finalEvent.width * events[event].horizontal;
      } else {
        finalEvent.leftPosition = 0;
      }

      eventPositions.push(finalEvent);
    }

    return eventPositions;
  }

}
