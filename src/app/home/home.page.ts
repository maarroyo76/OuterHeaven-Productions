import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name!: string;
  lastName!: string;
  email!: string;
  birthday!: string;
  age!: number;

  eventType!: string;
  selectedEvent!: string;
  events: string[] = [];
  isEventsDisabled: boolean = true; 
  private getEventOptions(eventType: string): string[] {
    switch (eventType) {
      case 'concert':
        return ['Concierto A', 'Concierto B', 'Concierto C'];
      case 'theatre':
        return ['Teatro X', 'Teatro Y', 'Teatro Z'];
      case 'sports':
        return ['Deporte 1', 'Deporte 2', 'Deporte 3'];
      default:
        return [];
    }
  }

  onEventTypeChange() {
    this.events = this.getEventOptions(this.eventType);
    this.isEventsDisabled = this.events.length === 0;
  }
}

