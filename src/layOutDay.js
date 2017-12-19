export {layOutDay, testEvents};

// test events
let testEvents = {
    event1: {start: 60, end: 120},  // an event from 10am to 11am
    event2: {start: 100, end: 240}, // an event from 10:40am to 1pm
    event3: {start: 700, end: 720}  // an event from 8:40pm to 9pm
}

/*
array of events will have this form:

eventObject = {
  id: string;
  start: number;
  end: number;
  width: number;
  leftPosition: number;
  topPosition: number;
}
*/

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
  * function layOutDay(events) {...}
  */
function layOutDay(events) {
  const totalWidth = 600; // total event width available
  const startTime = 0;
  const endTime = 720;
  let eventLayout = [];
  let times = [];

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
        if (!events[event].conflicts || time.length > events[event].conflicts)
        {
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
    let finalEvent = {};
    finalEvent.id = event;
    finalEvent.start = events[event].start;
    finalEvent.end = events[event].end;

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


    finalEvent.topPosition = events[event].start;

    eventLayout.push(finalEvent);
  }

  return eventLayout;
}
