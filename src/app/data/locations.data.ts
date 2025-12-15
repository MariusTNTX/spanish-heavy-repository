import { MetalLocation } from '../models/db.model';

export const locationFlag = {
  ANDALUCIA: 'assets/svg/andalucia.svg',
  ARAGON: 'assets/svg/aragon.svg',
  ASTURIAS: 'assets/svg/asturias.svg',
  BALEARES: 'assets/svg/baleares.svg',
  CATALUNIA: 'assets/svg/catalunia.svg',
  CASTILLA_LA_MANCHA: 'assets/svg/castilla_la_mancha.svg',
  CASTILLA_Y_LEON: 'assets/svg/castilla_y_leon.svg',
  GALICIA: 'assets/svg/galicia.svg',
  MADRID: 'assets/svg/madrid.svg',
  MURCIA: 'assets/svg/murcia.svg',
  NAVARRA: 'assets/svg/navarra.svg',
  PAIS_VASCO: 'assets/svg/pais_vasco.svg',
  VALENCIA: 'assets/svg/valencia.svg',
};

export const METAL_LOCATIONS: MetalLocation[] = [
  {
    inputs: ['A Coruña', 'La Coruña', 'Coruña'],
    name: 'A Coruña',
    community: 'GALICIA',
  },
  {
    inputs: ['Albacete'],
    name: 'Albacete',
    community: 'CASTILLA_LA_MANCHA',
  },
  {
    inputs: ['Badalona', 'Barcelona (Badalona)', 'Badalona (Barcelona)'],
    name: 'Badalona (Barcelona)',
    community: 'CATALUNIA',
  },
  {
    inputs: ['Baleares'],
    name: 'Baleares',
    community: 'BALEARES',
  },
  {
    inputs: ['Barcelona'],
    name: 'Barcelona',
    community: 'CATALUNIA',
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
    inputs: ['Granollers', 'Granollers (Barcelona)', 'Barcelona (Granollers)'],
    name: 'Granollers (Barcelona)',
    community: 'CATALUNIA',
  },
  {
    inputs: ['Albacete (La Gineta)', 'La Gineta (Albacete)', 'La Gineta'],
    name: 'La Gineta (Albacete)',
    community: 'CASTILLA_LA_MANCHA',
  },
  {
    inputs: ['La Rinconada', 'La Rinconada (Sevilla)', 'Sevilla (La Rinconada)'],
    name: 'La Rinconada (Sevilla)',
    community: 'ANDALUCIA',
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
    inputs: ['Santurtzi', 'Santurtzi (Vizcaya)', 'Vizcaya (Santurtzi)'],
    name: 'Santurtzi (Vizcaya)',
    community: 'PAIS_VASCO',
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
    inputs: ['Vigo', 'Vigo (Pontevedra)', 'Pontevedra (Vigo)'],
    name: 'Vigo (Pontevedra)',
    community: 'GALICIA',
  },
  {
    inputs: ['Villaverde', 'Villaverde (Madrid)', 'Madrid (Villaverde)'],
    name: 'Villaverde (Madrid)',
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
