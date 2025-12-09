import { Component, Input } from '@angular/core';
import { IonItem, IonLabel } from '@ionic/angular/standalone';
import { locationFlag, METAL_LOCATIONS } from 'src/app/data/locations.data';
import { MetalEvent } from 'src/app/models/db.model';

@Component({
  selector: 'app-list-event-item',
  templateUrl: './list-event-item.component.html',
  styleUrls: ['./list-event-item.component.scss'],
  imports: [IonItem, IonLabel]
})
export class ListEventItemComponent {

  @Input() event!: MetalEvent;

  public locFlags = locationFlag;

  constructor() { }

  get bands(): string {
    return this.event.fest || this.event.bands?.join(' + ') || '???';
  }

  get day(): number {
    return new Date(this.event.startDate).getDate();
  }
  
  get month(): string {
    const shortMonth = new Date(this.event.startDate)?.toLocaleString('es-ES', { month: 'short' });
    return shortMonth.charAt(0).toUpperCase() + shortMonth.slice(1).toLowerCase();
  }

  get year(): number {
    return new Date(this.event.startDate).getFullYear();
  }

  get flag(): string | undefined {
    const location = METAL_LOCATIONS.find(l => l.name === this.event.location)?.community;
    return !!location ? (locationFlag as any)[location] : undefined;
  }
}
