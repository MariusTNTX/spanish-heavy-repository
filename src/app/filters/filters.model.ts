import { FormControl } from "@angular/forms";

export interface MetalFilterControls {
  band: FormControl<string>,
  location: FormControl<string>,
  place: FormControl<string>,
  genre: FormControl<string>,
  startDate: FormControl<string>,
  endDate: FormControl<string>,
}

export interface MetalFilters {
  band: string,
  location: string,
  place: string,
  genre: string,
  startDate: string,
  endDate: string,
}