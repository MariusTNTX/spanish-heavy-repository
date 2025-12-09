import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { METAL_BANDS } from 'src/app/data/bands.data';
import { METAL_LOCATIONS } from 'src/app/data/locations.data';
import { MetalFilters } from 'src/app/filters/filters.model';
import { METAL_EVENTS } from '../../data/events.data';
import { MetalBand, MetalEvent } from '../../models/db.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private _currentPage: WritableSignal<number> = signal(1);
  private _appliedQuery: WritableSignal<string> = signal('');
  private _appliedFilters: WritableSignal<MetalFilters|null> = signal(null);
  private _metalEvents: WritableSignal<MetalEvent[]> = signal(METAL_EVENTS);

  public filteredMetalEvents: Signal<MetalEvent[]> = computed(() => {
    return this._metalEvents().filter((event: MetalEvent) => {
      if(this._appliedFilters() !== null || this._appliedQuery().length > 0){
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
          (!this._appliedQuery()?.length || this.matchQuery(event)) &&
          (!this._appliedFilters()?.startDate || new Date(event.startDate).getTime() >= new Date(filters.startDate).getTime()) &&
          (!this._appliedFilters()?.endDate || new Date(event.endDate).getTime() <= new Date(filters.endDate).getTime()) &&
          (!this._appliedFilters()?.band || event.bands?.includes(filters.band)) &&
          (!this._appliedFilters()?.location || this._appliedFilters()?.location === event.location) &&
          (!this._appliedFilters()?.place || this._appliedFilters()?.place === event.place) &&
          (!this._appliedFilters()?.genre || eventGenres.includes(filters.genre))
        );
      }
      return true;
    }).slice(0, this._currentPage() * 10);
  });

  public filtersApplied: Signal<number> = computed(() => {
    if(this._appliedFilters() !== null) {
      const filters = this._appliedFilters() as MetalFilters;
      const list: boolean[] = [
        filters.startDate.split('T')[0] !== new Date().toISOString().split('T')[0], 
        filters.endDate.split('T')[0] !== new Date(Date.now() + (1000 * 60 * 60 * 24 * 365)).toISOString().split('T')[0], 
        !!filters.band?.length, 
        !!filters.location?.length, 
        !!filters.place?.length, 
        !!filters.genre?.length
      ];
      return list.filter(elm => !!elm).length;
    }
    return 0;
  });

  public applyFilters(filters: MetalFilters): void {
    this._currentPage.set(1);
    this._appliedFilters.set(filters);
  }

  public applyQuery(query: string): void {
    this._currentPage.set(1);
    this._appliedQuery.set(query);
  }

  public nextPage(): void {
    this._currentPage.update(value => value + 1);
  }

  private matchQuery(event: MetalEvent): boolean {
    const query = this._appliedQuery().toLowerCase();
    const list = {
      bands: event.bands?.join('+')?.toLowerCase() || '',
      fest: event.fest?.toLowerCase() || '',
      location: event.location?.toLowerCase() || '',
      place: event.place?.toLowerCase() || '',
      day: new Date(event.startDate).getDate() + '',
      enMonth: new Date(event.startDate).toLocaleString('en-US', { month: 'long' }).toLowerCase(),
      esMonth: new Date(event.startDate).toLocaleString('es-ES', { month: 'long' }).toLowerCase(),
      year: new Date(event.startDate).getFullYear() + '',
      region: METAL_LOCATIONS.find(l => l.name === event.location)?.community?.toLowerCase()?.replace(/_/g, ' ') || '',
    }
    return Object.values(list).some(v => v.includes(query));
  }
}
