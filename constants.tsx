
import React from 'react';
import { 
  Map, 
  Compass, 
  Layers, 
  Route, 
  LayoutGrid, 
  Building2,
  CheckCircle2,
  Cpu,
  Target,
  Clock
} from 'lucide-react';

export const CONTACT_INFO = {
  pragnesh: { name: 'Pragnesh Chaudhary', phone: '93272 73364' },
  anish: { name: 'Anish Chaudhary', phone: '70462 33250' },
  address: '133, Akshar Complex, Mota Chiloda, Gandhinagar, Pin: 382355'
};

export const SERVICES = [
  {
    id: 'land-survey',
    title: { en: 'Land Survey', gu: 'જમીન માપણી' },
    description: { en: 'Accurate boundary identification and legal mapping for various land types.', gu: 'વિવિધ જમીન પ્રકારો માટે સચોટ સીમા ઓળખ અને કાનૂની મેપિંગ.' },
    icon: <Map className="w-8 h-8" />,
    useCase: { en: 'Residential, commercial, and agricultural land documentation.', gu: 'રહેણાંક, વ્યાપારી અને કૃષિ જમીન દસ્તાવેજીકરણ.' },
    output: { en: 'Cadastral maps, boundary reports, and legal drawings.', gu: 'કેડસ્ટ્રલ મેપ્સ, બાઉન્ડ્રી રિપોર્ટ્સ અને કાનૂની ડ્રોઈંગ્સ.' }
  },
  {
    id: 'dgps-survey',
    title: { en: 'DGPS Survey', gu: 'DGPS સર્વે' },
    description: { en: 'High-precision satellite-based positioning for superior accuracy.', gu: 'ચડિયાતી ચોકસાઈ માટે ઉચ્ચ-ચોકસાઇ સેટેલાઇટ-આધારિત પોઝિશનિંગ.' },
    icon: <Compass className="w-8 h-8" />,
    useCase: { en: 'Control point establishment and large-scale topography.', gu: 'કંટ્રોલ પોઈન્ટની સ્થાપના અને મોટા પાયે ટોપોગ્રાફી.' },
    output: { en: 'Coordinate tables, raw observation data, and processed XYZ files.', gu: 'કોઓર્ડિનેટ ટેબલ્સ, રો ઓબ્ઝર્વેશન ડેટા અને પ્રોસેસ્ડ XYZ ફાઇલો.' }
  },
  {
    id: 'topography-survey',
    title: { en: 'Topography Survey', gu: 'ટોપોગ્રાફી સર્વે' },
    description: { en: 'Detailed mapping of natural and man-made features.', gu: 'કુદરતી અને માનવસર્જિત સુવિધાઓનું વિગતવાર મેપિંગ.' },
    icon: <Layers className="w-8 h-8" />,
    useCase: { en: 'Civil engineering design, drainage planning, and site leveling.', gu: 'સિવિલ એન્જિનિયરિંગ ડિઝાઇન, ડ્રેનેજ પ્લાનિંગ અને સાઇટ લેવલિંગ.' },
    output: { en: 'Contour maps, 3D surface models, and elevation profiles.', gu: 'કોન્ટૂર મેપ્સ, 3D સરફેસ મોડલ્સ અને એલિવેશન પ્રોફાઇલ્સ.' }
  },
  {
    id: 'alignment-survey',
    title: { en: 'Alignment Survey', gu: 'એલાઈનમેન્ટ સર્વે' },
    description: { en: 'Specialized surveys for linear infrastructure projects.', gu: 'રેખીય ઇન્ફ્રાસ્ટ્રક્ચર પ્રોજેક્ટ્સ માટે વિશિષ્ટ સર્વે.' },
    icon: <Route className="w-8 h-8" />,
    useCase: { en: 'Road, Railway, Canal, Tower, and Transmission lines.', gu: 'રોડ, રેલ્વે, કેનાલ, ટાવર અને ટ્રાન્સમિશન લાઇન.' },
    output: { en: 'L-sections, X-sections, and centerline marking.', gu: 'L-સેક્શન, X-સેક્શન અને સેન્ટરલાઇન માર્કિંગ.' }
  },
  {
    id: 'city-survey',
    title: { en: 'City Survey', gu: 'સીટી સર્વે' },
    description: { en: 'Urban mapping for planning and infrastructure maintenance.', gu: 'આયોજન અને ઇન્ફ્રાસ્ટ્રક્ચર જાળવણી માટે શહેરી મેપિંગ.' },
    icon: <Building2 className="w-8 h-8" />,
    useCase: { en: 'Smart city planning, utility mapping, and municipal records.', gu: 'સ્માર્ટ સિટી પ્લાનિંગ, યુટિલિટી મેપિંગ અને મ્યુનિસિપલ રેકોર્ડ્સ.' },
    output: { en: 'GIS-compatible datasets and detailed urban base maps.', gu: 'GIS-સુસંગત ડેટાસેટ્સ અને વિગતવાર શહેરી બેઝ મેપ્સ.' }
  },
  {
    id: 'plotting-survey',
    title: { en: 'Plotting Survey', gu: 'પ્લોટિંગ સર્વે' },
    description: { en: 'Precise subdivision of land into individual plots.', gu: 'જમીનનું વ્યક્તિગત પ્લોટમાં ચોક્કસ પેટાવિભાજન.' },
    icon: <LayoutGrid className="w-8 h-8" />,
    useCase: { en: 'Township development and industrial estate layout.', gu: 'ટાઉનશિપ ડેવલપમેન્ટ અને ઇન્ફ્રાસ્ટ્રક્ચર એસ્ટેટ લેઆઉટ.' },
    output: { en: 'Layout plans, individual plot maps, and corner stone reports.', gu: 'લેઆઉટ પ્લાન્સ, વ્યક્તિગત પ્લોટ મેપ્સ અને કોર્નર સ્ટોન રિપોર્ટ્સ.' }
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: { en: 'Regional Office Analysis', gu: 'પ્રાદેશિક કચેરી વિશ્લેષણ' },
    location: { en: 'Gandhinagar, Gujarat', gu: 'ગાંધીનગર, ગુજરાત' },
    type: { en: 'Land Survey', gu: 'જમીન માપણી' },
    images: [
      'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 2,
    title: { en: 'Smart City Base Map', gu: 'સ્માર્ટ સિટી બેઝ મેપ' },
    location: { en: 'GIFT City, Gandhinagar', gu: 'ગિફ્ટ સિટી, ગાંધીનગર' },
    type: { en: 'Topography Survey', gu: 'ટોપોગ્રાફી સર્વે' },
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 3,
    title: { en: 'Sabarmati Bridge Project', gu: 'સાબરમતી બ્રિજ પ્રોજેક્ટ' },
    location: { en: 'Ahmedabad, Gujarat', gu: 'અમદાવાદ, ગુજરાત' },
    type: { en: 'Alignment Survey', gu: 'એલાઈનમેન્ટ સર્વે' },
    images: [
      'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1545139139-1662a9d94b0d?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 4,
    title: { en: 'Kutch Solar Field', gu: 'કચ્છ સોલાર ફિલ્ડ' },
    location: { en: 'Bhuj, Gujarat', gu: 'ભુજ, ગુજરાત' },
    type: { en: 'DGPS Survey', gu: 'DGPS સર્વે' },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 5,
    title: { en: 'Industrial SEZ Mapping', gu: 'ઔદ્યોગિક SEZ મેપિંગ' },
    location: { en: 'Dahej, Gujarat', gu: 'દહેજ, ગુજરાત' },
    type: { en: 'City Survey', gu: 'સીટી સર્વે' },
    images: [
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 6,
    title: { en: 'Metro Corridor Alignment', gu: 'મેટ્રો કોરિડોર એલાઈનમેન્ટ' },
    location: { en: 'Surat, Gujarat', gu: 'સુરત, ગુજરાત' },
    type: { en: 'Alignment Survey', gu: 'એલાઈનમેન્ટ સર્વે' },
    images: [
      'https://images.unsplash.com/photo-1449156001935-d2863fb72690?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1510673398445-94f4fd6e281f?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: { en: 'Experienced Surveyors', gu: 'અનુભવી સર્વેયર' },
    description: { en: 'Years of expertise in handling complex projects.', gu: 'જટિલ પ્રોજેક્ટ્સને હેન્ડલ કરવામાં વર્ષોની કુશળતા.' },
    icon: <CheckCircle2 className="w-6 h-6 text-red-700" />
  },
  {
    title: { en: 'Advanced Technology', gu: 'અદ્યતન ટેકનોલોજી' },
    description: { en: 'Utilizing latest DGPS for mm-level precision.', gu: 'ચોકસાઈ માટે નવીનતમ DGPS નો ઉપયોગ.' },
    icon: <Cpu className="w-6 h-6 text-red-700" />
  },
  {
    title: { en: 'Accurate Reports', gu: 'સચોટ અહેવાલો' },
    description: { en: 'Detailed drawings and GIS-ready data.', gu: 'વિગતવાર ડ્રોઈંગ્સ અને GIS-રેડી ડેટા.' },
    icon: <Target className="w-6 h-6 text-red-700" />
  },
  {
    title: { en: 'On-Time Delivery', gu: 'સમયસર ડિલિવરી' },
    description: { en: 'Strict adherence to project timelines.', gu: 'પ્રોજેક્ટ સમયમર્યાદાનું કડક પાલન.' },
    icon: <Clock className="w-6 h-6 text-red-700" />
  }
];
