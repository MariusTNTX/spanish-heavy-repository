import { Component, Input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { MetalEvent } from 'src/app/models/db.model';

@Component({
  selector: 'app-flyer-event-item',
  templateUrl: './flyer-event-item.component.html',
  styleUrls: ['./flyer-event-item.component.scss'],
  imports: [IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent]
})
export class FlyerEventItemComponent {

  @Input() event!: MetalEvent;

  constructor() { }

}
