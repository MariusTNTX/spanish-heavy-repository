import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonDatetime, IonDatetimeButton, IonItem, IonLabel, IonModal } from "@ionic/angular/standalone";

@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.scss'],
  imports: [IonLabel, IonDatetimeButton, IonItem, IonModal, IonDatetime, ReactiveFormsModule, IonButton]
})
export class DateSelectComponent {

  @Input() label: string = 'Fechas';
  @Input() startControl!: FormControl;
  @Input() endControl!: FormControl;

  public today: string = new Date().toISOString();

  get maxStartDate(): string {
    return this.endControl.value;
  }

  get minEndDate(): string {
    return this.startControl.value;
  }

  public resetStartDate(): void {
    this.startControl.setValue(new Date().toISOString());
  }

  public resetEndDate(): void {
    this.endControl.setValue(new Date(Date.now() + (1000 * 60 * 60 * 24 * 365)).toISOString());
  }
}
