import { MetalLocation } from '../models/db.model';

export const locationFlag = {
  ANDALUCIA:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Bandera_de_Andaluc%C3%ADa.svg/960px-Bandera_de_Andaluc%C3%ADa.svg.png?20080207004326',
  ARAGON:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Bandera_de_Arag%C3%B3n.svg/960px-Bandera_de_Arag%C3%B3n.svg.png?20091024194526',
  ASTURIAS:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Asturias.svg/800px-Flag_of_Asturias.svg.png?20140621172218',
  BALEARES:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Flag_of_the_Balearic_Islands.svg/960px-Flag_of_the_Balearic_Islands.svg.png?20140621160451',
  BARCELONA:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/1024px-Flag_of_Catalonia.svg.png',
  CASTILLA_LA_MANCHA:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Castile-La_Mancha.svg/750px-Flag_of_Castile-La_Mancha.svg.png?20090903092614',
  CASTILLA_Y_LEON:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bandera_de_Castilla_y_Le%C3%B3n_%28her%C3%A1ldica%29.svg/600px-Bandera_de_Castilla_y_Le%C3%B3n_%28her%C3%A1ldica%29.svg.png?20090526180522',
  GALICIA:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Galicia.svg/600px-Flag_of_Galicia.svg.png?20060226234755',
  MADRID:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_the_Community_of_Madrid.svg/960px-Flag_of_the_Community_of_Madrid.svg.png?20210801050711',
  MURCIA:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_Region_of_Murcia.svg/750px-Flag_of_the_Region_of_Murcia.svg.png?20140621170437',
  NAVARRA:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Bandera_Navarra.svg/800px-Bandera_Navarra.svg.png?20090626121153',
  PAIS_VASCO:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Flag_of_the_Basque_Country.svg/960px-Flag_of_the_Basque_Country.svg.png?20150905102146',
  VALENCIA:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Flag_of_the_Valencian_Community_%282x3%29.svg/512px-Flag_of_the_Valencian_Community_%282x3%29.svg.png?20170405094718',
};

export const METAL_LOCATIONS: MetalLocation[] = [
  {
    inputs: ['Albacete'],
    name: 'Albacete',
    community: 'CASTILLA_LA_MANCHA',
  },
  {
    inputs: ['Badalona', 'Barcelona (Badalona)', 'Badalona (Barcelona)'],
    name: 'Badalona (Barcelona)',
    community: 'BARCELONA',
  },
  {
    inputs: ['Baleares'],
    name: 'Baleares',
    community: 'BALEARES',
  },
  {
    inputs: ['Barcelona'],
    name: 'Barcelona',
    community: 'BARCELONA',
  },
  {
    inputs: ['Bilbao'],
    name: 'Bilbao',
    community: 'PAIS_VASCO',
  },
  {
    inputs: ['Burgos'],
    name: 'Burgos',
    community: 'CASTILLA_Y_LEON',
  },
  {
    inputs: ['Murcia (Cartagena)', 'Cartagena (Murcia)', 'Cartagena'],
    name: 'Cartagena (Murcia)',
    community: 'MURCIA',
  },
  {
    inputs: ['Málaga (Fuengirola)', 'Fuengirola (Málaga)', 'Fuengirola'],
    name: 'Fuengirola (Málaga)',
    community: 'ANDALUCIA',
  },
  {
    inputs: ['Gijón'],
    name: 'Gijón',
    community: 'ASTURIAS',
  },
  {
    inputs: ['Albacete (La Gineta)', 'La Gineta (Albacete)', 'La Gineta'],
    name: 'La Gineta (Albacete)',
    community: 'CASTILLA_LA_MANCHA',
  },
  {
    inputs: ['Leganés', 'Leganés (Madrid)', 'Madrid (Leganés)'],
    name: 'Leganés (Madrid)',
    community: 'MADRID',
  },
  {
    inputs: ['Madrid'],
    name: 'Madrid',
    community: 'MADRID',
  },
  {
    inputs: ['Málaga'],
    name: 'Málaga',
    community: 'ANDALUCIA',
  },
  {
    inputs: [
      'Martín de la Jara',
      'Sevilla (Martín de la Jara)',
      'Martín de la Jara (Sevilla)',
    ],
    name: 'Martín de la Jara (Sevilla)',
    community: 'ANDALUCIA',
  },
  {
    inputs: ['Valencia (Massanassa)', 'Massanassa (Valencia)', 'Massanassa'],
    name: 'Massanassa (Valencia)',
    community: 'VALENCIA',
  },
  {
    inputs: ['Murcia'],
    name: 'Murcia',
    community: 'MURCIA',
  },
  {
    inputs: ['Oviedo'],
    name: 'Oviedo',
    community: 'ASTURIAS',
  },
  {
    inputs: ['Pamplona'],
    name: 'Pamplona',
    community: 'NAVARRA',
  },
  {
    inputs: ['Pontevedra'],
    name: 'Pontevedra',
    community: 'GALICIA',
  },
  {
    inputs: ['Portugalete', 'Portugalete (Vizcaya)', 'Vizcaya (Portugalete)'],
    name: 'Portugalete (Vizcaya)',
    community: 'PAIS_VASCO',
  },
  {
    inputs: [
      'Alicante (Sant Vicent del Raspeig)',
      'Sant Vicent del Raspeig (Alicante)',
      'Sant Vicent del Raspeig',
    ],
    name: 'Sant Vicent del Raspeig (Alicante)',
    community: 'VALENCIA',
  },
  {
    inputs: ['Santiago de Compostela', 'Santiago'],
    name: 'Santiago de Compostela',
    community: 'GALICIA',
  },
  {
    inputs: ['Sevilla'],
    name: 'Sevilla',
    community: 'ANDALUCIA',
  },
  {
    inputs: ['Valencia'],
    name: 'Valencia',
    community: 'VALENCIA',
  },
  {
    inputs: ['Valladolid'],
    name: 'Valladolid',
    community: 'CASTILLA_Y_LEON',
  },
  {
    inputs: ['Villaverde', 'Villaverde (Madrid)', 'Madrid (Villaverde)'],
    name: 'Villaverde',
    community: 'MADRID',
  },
  {
    inputs: ['Alicante (Villena)', 'Villena (Alicante)', 'Villena'],
    name: 'Villena (Alicante)',
    community: 'VALENCIA',
  },
  {
    inputs: ['Vitoria', 'Vitoria-Gasteiz', 'Vitoria Gasteiz'],
    name: 'Vitoria-Gasteiz',
    community: 'PAIS_VASCO',
  },
  {
    inputs: ['Lugo (Viveiro)', 'Viveiro (Lugo)', 'Viveiro'],
    name: 'Viveiro (Lugo)',
    community: 'GALICIA',
  },
  {
    inputs: ['Zamora'],
    name: 'Zamora',
    community: 'CASTILLA_Y_LEON',
  },
  {
    inputs: ['Zaragoza'],
    name: 'Zaragoza',
    community: 'ARAGON',
  },
  {
    inputs: ['Zaratán', 'Valladolid (Zaratán)', 'Zaratán (Valladolid)'],
    name: 'Zaratán (Valladolid)',
    community: 'CASTILLA_Y_LEON',
  },
];
