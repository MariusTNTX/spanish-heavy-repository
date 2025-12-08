import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonList } from '@ionic/angular/standalone';
import { METAL_BANDS } from '../data/bands.data';
import { METAL_LOCATIONS } from '../data/locations.data';
import { METAL_PLACES } from '../data/places.data';
import { MetalBand } from '../models/db.model';
import { EventService } from '../services/events/event.service';
import { FilterService } from '../services/filters/filter.service';
import { DateSelectComponent } from "../shared/date-select/date-select/date-select.component";
import { SearchSelectComponent } from "../shared/search-select/search-select.component";
import { MetalFilters } from './filters.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  imports: [IonList, SearchSelectComponent, DateSelectComponent, ReactiveFormsModule]
})
export class FiltersComponent implements OnInit {  
  public bandOptions: string[] = METAL_BANDS.map(item => item.name);
  public locationOptions: string[] = METAL_LOCATIONS.map(item => item.name);
  public placeOptions: string[] = METAL_PLACES.map(item => item.name);
  public genreOptions: string[] = Array.from(
    METAL_BANDS.reduce((genres: Set<string>, band: MetalBand) => {
      band.genres.forEach(g => genres.add(g));
      return genres;
    }, new Set<string>())
  ).sort((a: string, b: string) => a.localeCompare(b));
  
  private filterSub!: Subscription;
  
  constructor(
    private readonly eventService: EventService,
    private readonly filterService: FilterService,
  ) { }

  ngOnInit(): void {
    this.filterSub = this.filterService.filterForm.valueChanges.subscribe(filters => {
      this.eventService.applyFilters(filters as MetalFilters);
    });
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }

  get startDateControl(): FormControl {
    return this.filterService.startDateControl;
  }

  get endDateControl(): FormControl {
    return this.filterService.endDateControl;
  }

  get bandControl(): FormControl {
    return this.filterService.bandControl;
  }

  get locationControl(): FormControl {
    return this.filterService.locationControl;
  }

  get placeControl(): FormControl {
    return this.filterService.placeControl;
  }

  get genreControl(): FormControl {
    return this.filterService.genreControl;
  }
}
