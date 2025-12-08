import { Component, inject } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonMenuButton,
  IonToolbar, IonModal, IonTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close, filter, search } from 'ionicons/icons';
import { MetalEvent } from '../models/db.model';
import { EventService } from '../services/events/event.service';
import { FlyerEventItemComponent } from './flyer-event-item/flyer-event-item.component';
import { ListEventItemComponent } from './list-event-item/list-event-item.component';
import { FiltersComponent } from "../filters/filters.component";

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  imports: [IonTitle, IonModal,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonContent,
    IonButton,
    IonInput,
    IonIcon,
    ListEventItemComponent,
    FlyerEventItemComponent, FiltersComponent],
})
export class FolderPage {
  private eventService = inject(EventService);

  public showEvents: boolean = true;
  public showFilters: boolean = false;

  constructor() {
    addIcons({ filter, close, search });
  }

  getEvents(): MetalEvent[] {
    return this.eventService.filteredMetalEvents();
  }
}
