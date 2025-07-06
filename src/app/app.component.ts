import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = '3';
  totalWeeks: number = 0;

  weeks = Array.from({ length: 4000 }, (_, i) => ({
    active: false,
  }));

  constructor() {}

updateWeeks(event: Event): void {
  const input = event.target as HTMLInputElement;
  const value = input.value;

  if (value) {
    const selectedDate = new Date(value);
    this.totalWeeks = this.getWeeksDiff(selectedDate);
    this.weeks = this.weeks.map((week, i) => ({
      active: i < this.totalWeeks,
    }));
  }
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
