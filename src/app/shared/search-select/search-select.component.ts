import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonInput, IonItem } from '@ionic/angular/standalone';
import { SearchSelectModalComponent } from './search-select-modal/search-select-modal.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { from, take } from 'rxjs';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss'],
  imports: [IonItem, IonInput, ReactiveFormsModule],
  providers: [ModalController]
})
export class SearchSelectComponent implements OnInit {
  @Input() label!: string;
  @Input() options: string[] = [];
  @Input() control!: FormControl;

  @ViewChild(IonInput, { static: true }) inputRef!: IonInput;

  private input!: HTMLInputElement;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    from(this.inputRef.getInputElement()).pipe(take(1)).subscribe(input => this.input = input);
  }

  async openSelect() {
    const modal = await this.modalCtrl.create({
      component: SearchSelectModalComponent,
      componentProps: {
        options: this.options,
        control: this.control,
        label: this.label
      },
      cssClass: 'search-select-modal'
    });
    await modal.present();
  }
  
  public onChange(){
    this.input.blur();
  }
}
