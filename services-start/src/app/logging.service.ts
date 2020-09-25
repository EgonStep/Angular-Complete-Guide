import { Injectable } from "@angular/core";

// This is the same as putting in proverds[] on AppModule
// Using this way, services can be loaded lazily by Angular, leading to better performance and loading speed
@Injectable({providedIn: 'root'})
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
