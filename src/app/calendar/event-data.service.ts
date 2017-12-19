import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventDataService {

  private path = 'https://appcues-interviews.firebaseio.com/calendar/events.json';

  constructor(private http: HttpClient) {
  }

  public getData(path?: string): Observable<any> {
    if (!path) {
      path = this.path;
    }

    return this.http.get(path)
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
  }

}
