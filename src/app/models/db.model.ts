export interface MetalEvent {
  startDate: string;
  endDate: string;
  creationDate: string;
  lastModifiedDate: string;
  block: string;
  location?: string;
  description?: string;
  flyer?: string;
  bands?: string[];
  fest?: string;
  place?: string;
  address?: string;
}

export interface MetalBand {
  inputs: string[];
  name: string;
  genres: string[];
}

export interface MetalLocation {
  inputs: string[];
  name: string;
  community: string;
}

export interface MetalPlace {
  inputs: string[];
  name: string;
  location: string;
}

export interface MetalFest {
  inputs: string[];
  name: string;
  location: string;
  bands: string[];
  place?: string;
}

export interface MetalGenre {
  name: string;
  color: string;
}