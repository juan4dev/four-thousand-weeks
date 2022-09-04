import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '3';
  totalWeeks: number = 0;

  constructor() {}

  updateWeeks(event: MatDatepickerInputEvent<Date>) {
    this.totalWeeks = this.getWeeksDiff(event.value);
  }

  getWeeksDiff(date: Date | null) {
    if (date) {
      const msInWeek = 1000 * 60 * 60 * 24 * 7;
      return Math.round(
        Math.abs(date.getTime() - new Date().getTime()) / msInWeek
      );
    }
    return 0;
  }
}
