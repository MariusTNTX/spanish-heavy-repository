import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetalFilterControls } from 'src/app/filters/filters.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public bandControl: FormControl = new FormControl<string|null>(null);
  public locationControl: FormControl = new FormControl<string|null>(null);
  public placeControl: FormControl = new FormControl<string|null>(null);
  public genreControl: FormControl = new FormControl<string|null>(null);
  public startDateControl: FormControl = new FormControl<string|null>(new Date().toISOString());
  public endDateControl: FormControl = new FormControl<string|null>(new Date(Date.now() + (1000 * 60 * 60 * 24 * 365)).toISOString());

  public filterForm: FormGroup<MetalFilterControls> = new FormGroup({
    band: this.bandControl,
    location: this.locationControl,
    place: this.placeControl,
    genre: this.genreControl,
    startDate: this.startDateControl,
    endDate: this.endDateControl,
  });
}
