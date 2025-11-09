import { Component, OnInit } from '@angular/core';
import { IonList, IonListHeader, IonNote } from '@ionic/angular/standalone';
import { SearchSelectComponent } from "../shared/search-select/search-select.component";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  imports: [IonList, IonListHeader, IonNote, SearchSelectComponent]
})
export class FiltersComponent  implements OnInit {

  public bandControl: FormControl = new FormControl<string|null>(null);
  public locationControl: FormControl = new FormControl<string|null>(null);
  public placeControl: FormControl = new FormControl<string|null>(null);
  public genreControl: FormControl = new FormControl<string|null>(null);
  public startDateControl: FormControl = new FormControl<Date|null>(null);
  public endDateControl: FormControl = new FormControl<Date|null>(null);

  public filterForm: FormGroup = new FormGroup({
    band: this.bandControl,
    location: this.locationControl,
    place: this.placeControl,
    genre: this.genreControl,
    startDate: this.startDateControl,
    endDate: this.endDateControl,
  });

  public options: string[] = [ 'Megadeth', 'Nightwish', 'Eluveitie' ];

  constructor() { }

  ngOnInit() {
    
  }

}
