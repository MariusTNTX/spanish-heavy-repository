import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { locationFlag, METAL_LOCATIONS } from '../data/locations.data';
import { MetalBand, MetalEvent, MetalFest, MetalLocation, MetalPlace } from '../models/db.model';
import { METAL_PLACES } from '../data/places.data';
import { METAL_BANDS } from '../data/bands.data';
import { METAL_FESTS } from '../data/fests.data';

@Component({
  selector: 'app-ics',
  templateUrl: './ics.page.html',
  styleUrls: ['./ics.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule]
})
export class IcsPage {

  public isReading = false;
  public concerts?: any[];

  constructor() { }

  submit(event: any){
    const icsFile = event.target?.files?.[0];
    if (icsFile) {
      const reader = new FileReader();
      this.isReading = true;

      reader.onload = (event: any) => {
        const jsonEvents = this.getConcertJSONFromICS(event.target.result);
        this.isReading = false;
        this.printEvents(jsonEvents as MetalEvent[]);
        this.printLocations();
        this.printPlaces();
        this.printBands();
        this.printFests();
      };

      reader.readAsText(icsFile);
    }
  }

  private getConcertJSONFromICS(ics: string) {
    const rawEvents = ics.split("BEGIN:VEVENT").slice(1);

    return (
      rawEvents
        .map((block) => {
          const get = (pattern: RegExp) => {
            const match = block.match(pattern);
            return match ? match[1].replace(/\r\n |[\r\n\\]/g, "") : null;
          };

          const startDate = get(/DTSTART(?:;VALUE=DATE)?:(\d{8})/);
          const endDate = get(/DTEND(?:;VALUE=DATE)?:(\d{8})/);
          const created = get(/CREATED:(\d{8}T\d{6})/);
          const modified = get(/LAST-MODIFIED:(\d{8}T\d{6})/);
          const summary = get(/SUMMARY:(.+?)\r?\n(?:[A-Z\-]+:|$)/s);
          const location = get(/LOCATION:(.+?)\r?\n(?:[A-Z\-]+:|$)/s);
          const description = get(/DESCRIPTION:(.+?)\r?\n(?:[A-Z\-]+:|$)/s);
          const isFest = summary?.includes('_');

          const parseDate = (str: string | null) => {
            if (!str) return null;
            if (str.length === 8) {
              return new Date(
                parseInt(str.substring(0, 4)),
                parseInt(str.substring(4, 6)) - 1,
                parseInt(str.substring(6, 8))
              ).toISOString();
            } else {
              return new Date(
                parseInt(str.substring(0, 4)),
                parseInt(str.substring(4, 6)) - 1,
                parseInt(str.substring(6, 8)),
                parseInt(str.substring(9, 11)),
                parseInt(str.substring(11, 13)),
                parseInt(str.substring(13, 15))
              ).toISOString();
            }
          };

          const sanitizedDescription = description?.replace(/<br>\*/g, 'n*')?.replace(/<[^>]+>/g, '');
          const descriptionLines: string[] | undefined = sanitizedDescription?.split('n*')?.map(l => l.trim());
          const flyer = descriptionLines?.[0]?.includes('http') ? descriptionLines.shift() : undefined;
          const summaryParts = summary ? summary.split(",") : [];
          let bands: string[] | undefined = summaryParts[0]?.split('+')?.map(b => b.replace('_', '')?.trim()) || [];
          const locationName = summaryParts[1]?.trim();
          const place = summaryParts[2]?.trim();

          let fest = undefined;
          if(isFest){
            fest = bands[0];
            bands = descriptionLines?.length ? descriptionLines : undefined;
          }

          return {
            startDate: parseDate(startDate),
            endDate: parseDate(endDate),
            creationDate: parseDate(created),
            lastModifiedDate: parseDate(modified),
            bands,
            location: locationName || undefined,
            place: place || undefined,
            address: location || undefined,
            description: description || undefined,
            flyer,
            block,
            fest
          };
        })
        .filter((e) => e.startDate && new Date(e.startDate).getTime() > Date.now())
        .sort((a: any, b: any) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    );
  }

  public getParsedDate(event: any){
    const formatDate = (date: Date) => date.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const formatShort = (date: Date) => date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
    });

    let dateLabel = "";
    if (event.startDate && event.endDate) {
      const diffDays = Math.round(
        (new Date(event.endDate).getTime() - new Date(event.startDate).getTime()) / (1000 * 60 * 60 * 24)
      );
      if (diffDays > 1) {
        // Festival (más de 1 día de diferencia)
        dateLabel = `${formatShort(new Date(event.startDate))} – ${formatShort(new Date(event.endDate))} ${new Date(event.endDate).getFullYear()}`;
      } else {
        // Evento de un día
        dateLabel = formatDate(new Date(event.startDate));
      }
    } else if (event.startDate) {
      dateLabel = formatDate(new Date(event.startDate));
    }
    return dateLabel;
  }

  public getFlagSVG(location: string){
    const spanishFlag = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.svg.png?20240115205409";
    const foundLoc = METAL_LOCATIONS.find((ml: MetalLocation) => [...ml.inputs, ml.name].includes(location));
    return foundLoc?.community ? (locationFlag as any)[foundLoc.community] : spanishFlag;
  }

  public getBands(event: any){
    return event?.fest || event?.bands?.join(' + ') || 'unknown';
  }

  private printEvents(events: MetalEvent[]){
    this.concerts = events
      ?.map((event: MetalEvent) => 
        ({ 
          ...event, 
          bands: event.bands?.map(band => (METAL_BANDS.find(b => b.inputs.includes(band))?.name) || (band.includes('TBC') ? band : band + '_NEW_')),
          location: (METAL_LOCATIONS.find(l => l.inputs.includes(event.location || ''))?.name) || (event.location + '_NEW_'),
          place: (METAL_PLACES.find(p => p.inputs.includes(event.place || ''))?.name) || (event.place?.includes('TBC') ? event.place : event.place + '_NEW_')
        })
      );
    console.log('EVENTS', this.concerts);
  }

  private printLocations(){
    const set = new Set<string>();
    METAL_LOCATIONS.map(l => set.add(l.name));
    this.concerts?.forEach(e => set.add(e.location));
    const list = Array.from(set)
      .sort((a,b) => a.localeCompare(b))
      .map((location: string) => 
        METAL_LOCATIONS?.find(l => l.name === location ||  l.inputs.includes(location)) || 
        ({ 
          inputs: [location],
          name: location,
          community: '_NEW_',
        })
      )
      .reduce((result: MetalLocation[], item: MetalLocation) => {
        if(!result.some(e => e.name === item.name)){
          result.push(item);
        }
        return result;
      }, [] as MetalLocation[]);
    console.log('LOCATIONS', list);
  }

  private printPlaces(){
    const set = new Set<string>();
    METAL_PLACES.map(p => set.add(`${p.name};${p.location}`));
    this.concerts?.forEach(e => {
      if(e.place && !e.place.includes('TBC')){
        set.add(`${e.place};${e.location}`);
      }
    });
    const list = Array.from(set)
      .sort((a,b) => a.localeCompare(b))
      .map(locPlace => 
        METAL_PLACES?.find(p => p.name === locPlace.split(';')[0] || p.inputs.includes(locPlace.split(';')[0])) || 
        ({
          inputs: [locPlace.split(';')[0]],
          name: locPlace.split(';')[0] + '_NEW_',
          location: METAL_LOCATIONS.find(l => l.inputs.includes(locPlace.split(';')[1]))?.name || locPlace.split(';')[1],
        }) as MetalPlace
      )
      .reduce((result: MetalPlace[], item: MetalPlace) => {
        if(!result.some(e => e.name === item.name)){
          result.push(item);
        }
        return result;
      }, [] as MetalPlace[]);
    console.log('PLACES', list);
  }
  
  private printBands(){
    const set = new Set<string>();
    METAL_BANDS.map(b => set.add(b.name));
    this.concerts?.forEach(e => e.bands?.forEach((b: string) => !b.includes('TBC') && set.add(b)));
    const list = Array.from(set)
      .sort((a,b) => a.localeCompare(b))
      .map((band: string) => METAL_BANDS?.find(b => b.name === band || b.inputs.includes(band)) || 
        ({
          inputs: [band],
          name: band + '_NEW_',
          genres: [],
        })
      )
      .reduce((result: MetalBand[], item: MetalBand) => {
        if(!result.some(e => e.name === item.name)){
          result.push(item);
        }
        return result;
      }, [] as MetalBand[]);
    console.log('BANDS', list);
  }
  
  private printFests(){
    const set = new Set<string>();
    METAL_FESTS.map(f => set.add(`${f.name};${f.location};${f.place}`));
    this.concerts?.forEach(e => e.fest && set.add(`${e.fest};${e.location};${e.place}`));
    const list = Array.from(set)
      .sort((a,b) => a.localeCompare(b))
      .map((festLocPlace: string) => {
        const foundFest = METAL_FESTS?.find(p => p.name === festLocPlace.split(';')[0] || p.inputs.includes(festLocPlace.split(';')[0]))
        return {
          inputs: foundFest?.inputs || [festLocPlace.split(';')[0]],
          name: foundFest?.name || festLocPlace.split(';')[0] + '_NEW_',
          location: METAL_LOCATIONS.find(l => l.inputs.includes(festLocPlace.split(';')[1]))?.name || festLocPlace.split(';')[1],
          place: METAL_PLACES.find(p => p.inputs.includes(festLocPlace.split(';')[2]))?.name || festLocPlace.split(';')[2],
          bands: this.concerts?.find(c => c.fest === festLocPlace.split(';')[0])?.bands?.map((band: string) => METAL_BANDS.find(b => b.inputs.includes(band))?.name || band) || []
        };
      })
      .reduce((result: MetalFest[], item: MetalFest) => {
        if(!result.some(e => e.name === item.name)){
          result.push(item);
        }
        return result;
      }, [] as MetalFest[]);
    console.log('FESTS', list);
  }
}
