import { Component, inject } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonMenuButton,
  IonToolbar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { search } from 'ionicons/icons';
import { MetalEvent } from '../models/db.model';
import { EventService } from '../services/events/event.service';
import { FlyerEventItemComponent } from './flyer-event-item/flyer-event-item.component';
import { ListEventItemComponent } from './list-event-item/list-event-item.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonButton,
    IonInput,
    IonIcon,
    ListEventItemComponent,
    FlyerEventItemComponent
  ],
})
export class FolderPage {
  private eventService = inject(EventService);

  public showEvents: boolean = true;

  constructor() {
    addIcons({ search });
  }

  getEvents(): MetalEvent[] {
    return this.eventService.getMetalEvents();
  }
}
