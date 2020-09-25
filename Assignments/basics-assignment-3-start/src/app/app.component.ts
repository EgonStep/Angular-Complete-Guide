import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .element {
      color: white;
    }
  `]
})
export class AppComponent {

  // ========================  My Solution
  showName = 'none';
  realName = 'Username = Tom';
  logs = [];
  log = -1;

  displayDetails() {
    this.showName =  (this.showName === 'none') ? 'block' : 'none';
    this.logs.push(this.log += 1);
  }

  getBackgroundColor(i: number) {
    return i > 4 ? 'blue' : '';
  }

  // ========================  Teacher Solution
  showResult = false;
  logsTeacher = [];

  onToggleDetails() {
    this.showResult = !this.showResult;
    // this.logsTeacher.push(this.logsTeacher.length + 1);
    // For timestamp
    this.logsTeacher.push(new Date());
  }
}
