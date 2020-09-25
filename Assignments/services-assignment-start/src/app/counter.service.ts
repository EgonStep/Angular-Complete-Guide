import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {

  activeSum = 0;
  inactiveSum = 0;

  onActive() {
    console.log("Active count: " + ++this.activeSum);
  }

  onInactive() {
    console.log("Inactive count: " + ++this.inactiveSum);
  }
}
