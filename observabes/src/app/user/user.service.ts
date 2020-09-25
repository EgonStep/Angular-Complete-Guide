import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  // Old approach
  // activatedEmitter = new EventEmitter<boolean>();

  // New approach to use as cross-component events, when we manually call next()
  activatedEmitter = new Subject<boolean>();

  // Observable is an more passive approach. Wraps callbacks, events...
  // Subject is an more active approach. Can be triggered from code.

  // If you're not subscribing to an event emitter, then it probably is an @Output.
  // If you do plan to subscribe manually, then it is a Subject
}
