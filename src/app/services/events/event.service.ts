import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { MetalBand, MetalEvent } from '../../models/db.model';
import { METAL_EVENTS } from '../../data/events.data';
import { METAL_BANDS } from 'src/app/data/bands.data';
import { MetalFilterControls, MetalFilters } from 'src/app/filters/filters.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  
  private _appliedFilters: WritableSignal<MetalFilters|null> = signal(null);
  private _metalEvents: WritableSignal<MetalEvent[]> = signal(METAL_EVENTS);
  public filteredMetalEvents: Signal<MetalEvent[]> = computed(() => {
    return this._metalEvents().filter((event: MetalEvent) => {
      if(this._appliedFilters() !== null){
        const filters = this._appliedFilters() as MetalFilters;
        const eventGenres: string[] = Array.from(
          METAL_BANDS
            .filter(b => event.bands?.includes(b.name))
            .reduce((genres: Set<string>, band: MetalBand) => {
              band.genres.forEach(g => genres.add(g));
              return genres;
            }, new Set<string>())
        );
        return (
          (!this._appliedFilters()?.startDate || new Date(event.startDate).getTime() >= new Date(filters.startDate).getTime()) &&
          (!this._appliedFilters()?.endDate || new Date(event.endDate).getTime() <= new Date(filters.endDate).getTime()) &&
          (!this._appliedFilters()?.band || event.bands?.includes(filters.band)) &&
          (!this._appliedFilters()?.location || this._appliedFilters()?.location === event.location) &&
          (!this._appliedFilters()?.place || this._appliedFilters()?.place === event.place) &&
          (!this._appliedFilters()?.genre || eventGenres.includes(filters.genre))
        );
      }
      return true;
    });
  });

  public applyFilters(filters: MetalFilters): void {
    this._appliedFilters.set(filters);
  }
}
