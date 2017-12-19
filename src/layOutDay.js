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

  // TODO: find conflicts

  // TODO: set width based on number of conflicts (totalWidth/conflicts)

  // TODO: set leftPosition based on number of conflict / start time

  // TODO: set topPosition based on start time

  return events;
}
