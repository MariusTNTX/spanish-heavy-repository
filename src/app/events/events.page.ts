import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

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
    FlyerEventItemComponent, 
    FiltersComponent,
    ReactiveFormsModule
  ],
})
export class FolderPage implements OnInit, OnDestroy {
  private eventService = inject(EventService);
  private querySub!: Subscription;

  public queryControl: FormControl = new FormControl<string>('');
  public showEvents: boolean = true;
  public showFilters: boolean = false;

  constructor() {
    addIcons({ filter, close, search });
  }
  
  ngOnInit(): void {
    this.querySub = this.queryControl.valueChanges.subscribe(query => 
      this.eventService.applyQuery(query)
    );
  }

  ngOnDestroy(): void {
    this.querySub.unsubscribe();
  }

  getEvents(): MetalEvent[] {
    return this.eventService.filteredMetalEvents();
  }
}
