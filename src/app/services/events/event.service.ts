import { Injectable } from '@angular/core';
import { MetalEvent } from '../../models/db.model';
import { METAL_EVENTS } from '../../data/events.data';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  
  getMetalEvents(): MetalEvent[] {
    return METAL_EVENTS;
  }
}
