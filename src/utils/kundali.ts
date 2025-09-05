export interface PlanetaryPosition {
  planet: string;
  sign: string;
  house: number;
  degree: number;
}

export interface House {
  number: number;
  ruler: string;
  significance: string;
}

export interface Aspect {
  planets: string[];
  aspect: string;
  strength: string;
}

export interface BasicInfo {
  sunSign: string;
  moonSign: string;
  ascendant: string;
  nakshatra: string;
}

export interface KundaliData {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  basicInfo: BasicInfo;
  planetaryPositions: PlanetaryPosition[];
  houses: House[];
  aspects: Aspect[];
}

const planets = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'];
const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const nakshatras = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha',
  'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha',
  'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

const houseSignificances = [
  'Self, personality, physical appearance, general health',
  'Wealth, family, speech, food, early childhood',
  'Siblings, courage, short journeys, communication',
  'Mother, home, property, vehicles, emotional foundation',
  'Children, creativity, education, romance, speculation',
  'Health, service, daily routine, enemies, debts',
  'Marriage, partnerships, business, public relations',
  'Longevity, transformation, occult, inheritance',
  'Higher learning, spirituality, long journeys, luck',
  'Career, reputation, father, authority, social status',
  'Gains, friends, hopes, wishes, elder siblings',
  'Losses, expenses, foreign lands, spirituality, liberation'
];

export const generateKundali = (formData: any): KundaliData => {
  const birthDate = new Date(formData.birthDate);
  
  // Generate basic info
  const sunSign = getZodiacSignFromDate(birthDate);
  const moonSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const ascendant = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const nakshatra = nakshatras[Math.floor(Math.random() * nakshatras.length)];

  // Generate planetary positions
  const planetaryPositions: PlanetaryPosition[] = planets.map(planet => ({
    planet,
    sign: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)],
    house: Math.floor(Math.random() * 12) + 1,
    degree: Math.floor(Math.random() * 30) + 1
  }));

  // Generate houses
  const houses: House[] = Array.from({ length: 12 }, (_, i) => ({
    number: i + 1,
    ruler: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)],
    significance: houseSignificances[i]
  }));

  // Generate aspects
  const aspects: Aspect[] = [
    {
      planets: ['Sun', 'Moon'],
      aspect: 'Conjunction',
      strength: 'Strong'
    },
    {
      planets: ['Mars', 'Jupiter'],
      aspect: 'Trine',
      strength: 'Moderate'
    },
    {
      planets: ['Venus', 'Mercury'],
      aspect: 'Sextile',
      strength: 'Weak'
    },
    {
      planets: ['Saturn', 'Rahu'],
      aspect: 'Opposition',
      strength: 'Strong'
    },
    {
      planets: ['Jupiter', 'Venus'],
      aspect: 'Square',
      strength: 'Moderate'
    }
  ];

  return {
    name: formData.name,
    birthDate: formData.birthDate,
    birthTime: formData.birthTime,
    birthPlace: formData.birthPlace,
    basicInfo: {
      sunSign,
      moonSign,
      ascendant,
      nakshatra
    },
    planetaryPositions,
    houses,
    aspects
  };
};

const getZodiacSignFromDate = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
  return 'Pisces';
};