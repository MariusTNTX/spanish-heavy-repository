import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [CommonModule, IonRouterOutlet]
})
export class MainPage {}
