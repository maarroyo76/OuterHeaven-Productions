import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name!: string;
  lastName!: string;
  email!: string;
  birthday!: string; // Asegúrate de que sea un string en formato 'YYYY-MM-DD' o similar
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
  
  get formattedBirthday(): string {
    return this.birthday ? new Date(this.birthday).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }) : '';
  }

  // Maneja el cambio de fecha
  onDateChange(event: any) {
    this.birthday = event.detail.value; // Guarda la fecha seleccionada en formato ISO
  }

  onEventTypeChange() {
    this.events = this.getEventOptions(this.eventType);
    this.isEventsDisabled = this.events.length === 0;
  }
}
