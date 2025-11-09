import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search-select-modal',
  templateUrl: './search-select-modal.component.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonSearchbar, IonContent, IonList, IonItem, IonLabel, IonRadioGroup, IonRadio, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [ModalController]
})
export class SearchSelectModalComponent {
  @Input() options: string[] = [];
  @Input() control!: FormControl;
  @Input() label!: string;

  public query = '';

  constructor(private modalCtrl: ModalController) {}

  filteredOptions() {
    return this.options.filter(opt =>
      opt.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  toggle(opt: string) {
    this.control.setValue(this.control?.value === opt ? null : opt);
    this.confirm();
  }

  confirm() {
    this.modalCtrl.dismiss(this.control.value);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
