import { Component, inject, OnDestroy, OnInit, Signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  InfiniteScrollCustomEvent,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonInput,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close, filter, search } from 'ionicons/icons';
import { debounceTime, distinctUntilChanged, Subscription, tap } from 'rxjs';
import { FiltersComponent } from '../filters/filters.component';
import { MetalEvent } from '../models/db.model';
import { EventService } from '../services/events/event.service';
import { FlyerEventItemComponent } from './flyer-event-item/flyer-event-item.component';
import { ListEventItemComponent } from './list-event-item/list-event-item.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  imports: [
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonTitle,
    IonModal,
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
    ReactiveFormsModule,
  ],
})
export class FolderPage implements OnInit, OnDestroy {
  private eventService = inject(EventService);
  private querySub!: Subscription;

  public queryControl: FormControl = new FormControl<string>('');
  public showEvents: boolean = true;
  public showFilters: boolean = false;
  public filtersApplied: Signal<number> = this.eventService.filtersApplied;

  constructor() {
    addIcons({ filter, close, search });
  }

  ngOnInit(): void {
    this.querySub = this.queryControl.valueChanges.subscribe((query) =>
      this.eventService.applyQuery(query)
    );
  }

  ngOnDestroy(): void {
    this.querySub.unsubscribe();
  }

  getEvents(): MetalEvent[] {
    return this.eventService.filteredMetalEvents();
  }

  onIonInfiniteList(event: InfiniteScrollCustomEvent) {
    this.eventService.nextPage();
    event.target.complete();
  }

  onIonInfiniteFlyer(event: InfiniteScrollCustomEvent) {
    this.eventService.nextPage();
    event.target.complete();
  }
}
