# DayCalendar

Calendar exercise

**Verify that you are running at least node `v6.9.0` or higher and npm `3` or higher**

`npm install` then `npm run start` to run the first time

To test with other events objects, change `path` in `event-date.service.ts`

Deployed here: http://calendar-challenge.surge.sh/

## Details

`Part I` logic can be found in [lay-out-day.service.ts](src/app/calendar/lay-out-day.service.ts)

`Part II` is [event-data.service.ts](src/app/calendar/event-data.service.ts) and used in  [lay-out-day.service.ts](src/app/calendar/lay-out-day.service.ts)

`Part III` event styling / placement [event.component.ts](src/app/calendar/event/event.component.ts)

Note: [calendar.component.html](src/app/calendar/calendar.component.html) and [calendar.component.css](src/app/calendar/calendar.component.css) mostly copy/paste from stack overflow

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
