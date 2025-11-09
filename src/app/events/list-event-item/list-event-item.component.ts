import { Component, Input } from '@angular/core';
import { IonItem, IonLabel } from '@ionic/angular/standalone';
import { MetalEvent } from 'src/app/models/db.model';

@Component({
  selector: 'app-list-event-item',
  templateUrl: './list-event-item.component.html',
  styleUrls: ['./list-event-item.component.scss'],
  imports: [IonItem, IonLabel]
})
export class ListEventItemComponent {

  @Input() event!: MetalEvent;

  constructor() { }

}
