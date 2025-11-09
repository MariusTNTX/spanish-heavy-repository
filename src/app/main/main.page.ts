import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSplitPane, IonMenu, IonRouterOutlet } from '@ionic/angular/standalone';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonSplitPane, IonContent, CommonModule, FormsModule, IonMenu, IonRouterOutlet, FiltersComponent]
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
