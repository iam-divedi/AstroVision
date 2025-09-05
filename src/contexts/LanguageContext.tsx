import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.predictions': 'Predictions',
    'nav.horoscope': 'Horoscope',
    'nav.kundali': 'Kundali',
    'nav.astrologer': 'Astrologer',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.title': 'Discover Your Cosmic Journey',
    'home.subtitle': 'Welcome to AstroVision, where ancient wisdom meets modern insights. Explore the mysteries of the cosmos and uncover what the stars have in store for you.',
    'home.getPrediction': 'Get Your Prediction',
    'home.viewHoroscopes': 'View Horoscopes',
    'home.personalPredictions': 'Personal Predictions',
    'home.personalPredictionsDesc': 'Get personalized future predictions based on your birth date and zodiac sign. Discover what the cosmos has planned for your journey ahead.',
    'home.dailyHoroscopes': 'Daily Horoscopes',
    'home.dailyHoroscopesDesc': 'Start your day with cosmic guidance. Read your daily and weekly horoscopes to align your actions with celestial energies.',
    'home.expertGuidance': 'Expert Guidance',
    'home.expertGuidanceDesc': 'Connect with our experienced astrologer for personalized consultations and deeper insights into your cosmic blueprint.',
    'home.whatIsAstrology': 'What is Astrology?',
    'home.astrologyDesc': 'Astrology is the ancient art and science of understanding how celestial movements influence human life and earthly events. For thousands of years, cultures around the world have looked to the stars for guidance, wisdom, and insight.',
    'home.zodiacSigns': 'The Zodiac Signs',
    'home.zodiacSignsDesc': 'The zodiac consists of twelve signs, each representing different personality traits, strengths, and characteristics. Your sun sign, determined by your birth date, offers insights into your core nature.',
    'home.cosmicInfluence': 'Cosmic Influence',
    'home.cosmicInfluenceDesc': 'Planetary positions and movements create energetic patterns that can influence various aspects of life including relationships, career, health, and personal growth opportunities.',
    
    // Predictions Page
    'predictions.title': 'Your Personal Predictions',
    'predictions.subtitle': 'Enter your birth date to discover what the cosmos has in store for your future. Our predictions are crafted based on ancient astrological wisdom and celestial insights.',
    'predictions.birthDate': 'Your Birth Date',
    'predictions.revealDestiny': 'Reveal Your Destiny',
    'predictions.youAre': 'You are a',
    'predictions.bornBetween': 'Born between',
    'predictions.career': 'Career & Finance',
    'predictions.love': 'Love & Relationships',
    'predictions.personal': 'Personal Growth',
    'predictions.overall': 'Overall Outlook',
    'predictions.readyToExplore': 'Ready to Explore Your Future?',
    'predictions.enterBirthDate': 'Enter your birth date above to receive detailed predictions about your career, relationships, and personal growth journey.',
    
    // Kundali Page
    'kundali.title': 'Kundali Maker',
    'kundali.subtitle': 'Generate your detailed birth chart (Kundali) based on your exact birth details. Discover the positions of planets and their influence on your life.',
    'kundali.birthDetails': 'Birth Details',
    'kundali.fullName': 'Full Name',
    'kundali.birthTime': 'Birth Time',
    'kundali.birthPlace': 'Birth Place',
    'kundali.generateKundali': 'Generate Kundali',
    'kundali.yourBirthChart': 'Your Birth Chart',
    'kundali.planetaryPositions': 'Planetary Positions',
    'kundali.houses': 'Houses',
    'kundali.aspects': 'Planetary Aspects',
    'kundali.basicInfo': 'Basic Information',
    'kundali.sunSign': 'Sun Sign',
    'kundali.moonSign': 'Moon Sign',
    'kundali.ascendant': 'Ascendant',
    'kundali.nakshatra': 'Nakshatra',
    'kundali.planet': 'Planet',
    'kundali.sign': 'Sign',
    'kundali.house': 'House',
    'kundali.degree': 'Degree',
    'kundali.houseNumber': 'House',
    'kundali.houseRuler': 'Ruler',
    'kundali.houseSignificance': 'Significance',
    'kundali.aspectType': 'Aspect',
    'kundali.planets': 'Planets',
    'kundali.strength': 'Strength',
    
    // Horoscope Page
    'horoscope.title': 'Horoscope Readings',
    'horoscope.subtitle': 'Discover what the stars have aligned for you today and this week. Select your zodiac sign to receive personalized cosmic guidance.',
    'horoscope.daily': 'Daily',
    'horoscope.weekly': 'Weekly',
    'horoscope.chooseSign': 'Choose Your Zodiac Sign',
    'horoscope.selectSign': 'Select your zodiac sign from the grid above to view your personalized horoscope reading.',
    'horoscope.general': 'General Overview',
    'horoscope.loveRelationships': 'Love & Relationships',
    'horoscope.careerMoney': 'Career & Money',
    'horoscope.luckyNumbers': 'Lucky Numbers & Colors',
    
    // Astrologer Page
    'astrologer.title': 'Meet Your Astrologer',
    'astrologer.subtitle': 'Connect with Luna Starweaver, our expert astrologer with over 15 years of experience in guiding souls through the wisdom of the stars.',
    'astrologer.name': 'Luna Starweaver',
    'astrologer.title2': 'Certified Astrologer & Spiritual Guide',
    'astrologer.experience': '15+ Years Experience',
    'astrologer.rating': '5.0 Rating (500+ Readings)',
    'astrologer.bio': 'Luna has been studying the celestial arts since childhood, following in the footsteps of her grandmother who was a renowned mystic. With certifications from the International Society of Astrological Research and years of dedicated practice, Luna combines traditional astrological wisdom with modern psychological insights.',
    'astrologer.bookConsultation': 'Book Consultation',
    'astrologer.sendMessage': 'Send Message',
    'astrologer.expertise': 'Areas of Expertise',
    'astrologer.consultationOptions': 'Consultation Options',
    'astrologer.personalReading': 'Personal Reading',
    'astrologer.relationshipCompatibility': 'Relationship Compatibility',
    'astrologer.careerLifePath': 'Career & Life Path',
    'astrologer.availableHours': 'Available Hours',
    'astrologer.testimonials': 'Client Testimonials',
    'astrologer.readyForReading': 'Ready to Discover Your Path?',
    'astrologer.bookPersonal': 'Book a personal consultation with Luna and unlock the cosmic insights that will guide you toward your highest potential.',
    
    // Contact Page
    'contact.title': 'Connect With Us',
    'contact.subtitle': 'Have questions about your cosmic journey? Ready to book a consultation? We\'re here to guide you through the mysteries of the universe.',
    'contact.sendMessage': 'Send Us a Message',
    'contact.messageSent': 'Message Sent!',
    'contact.thankYou': 'Thank you for reaching out. We\'ll respond within 24 hours.',
    'contact.fullName': 'Full Name',
    'contact.emailAddress': 'Email Address',
    'contact.phoneNumber': 'Phone Number',
    'contact.consultationType': 'Consultation Type',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.whatCanWeHelp': 'What can we help you with?',
    'contact.tellUs': 'Tell us about your questions or what you\'d like to explore...',
    'contact.getInTouch': 'Get In Touch',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.whyChoose': 'Why Choose AstroVision?',
    'contact.expertGuidance2': 'Expert Guidance',
    'contact.personalizedApproach': 'Personalized Approach',
    'contact.confidentialCaring': 'Confidential & Caring',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.scheduleNow': 'Schedule Now',
    'common.callNow': 'Call Now',
    'common.required': 'required',
    'common.optional': 'optional',
    'common.submit': 'Submit',
    'common.send': 'Send',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    
    // Zodiac Signs
    'zodiac.aries': 'Aries',
    'zodiac.taurus': 'Taurus',
    'zodiac.gemini': 'Gemini',
    'zodiac.cancer': 'Cancer',
    'zodiac.leo': 'Leo',
    'zodiac.virgo': 'Virgo',
    'zodiac.libra': 'Libra',
    'zodiac.scorpio': 'Scorpio',
    'zodiac.sagittarius': 'Sagittarius',
    'zodiac.capricorn': 'Capricorn',
    'zodiac.aquarius': 'Aquarius',
    'zodiac.pisces': 'Pisces',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.predictions': 'भविष्यवाणी',
    'nav.horoscope': 'राशिफल',
    'nav.kundali': 'कुंडली',
    'nav.astrologer': 'ज्योतिषी',
    'nav.contact': 'संपर्क',
    
    // Home Page
    'home.title': 'अपनी ब्रह्मांडीय यात्रा की खोज करें',
    'home.subtitle': 'एस्ट्रोविज़न में आपका स्वागत है, जहाँ प्राचीन ज्ञान आधुनिक अंतर्दृष्टि से मिलता है। ब्रह्मांड के रहस्यों का अन्वेषण करें और जानें कि तारे आपके लिए क्या लेकर आए हैं।',
    'home.getPrediction': 'अपनी भविष्यवाणी पाएं',
    'home.viewHoroscopes': 'राशिफल देखें',
    'home.personalPredictions': 'व्यक्तिगत भविष्यवाणी',
    'home.personalPredictionsDesc': 'अपनी जन्म तिथि और राशि के आधार पर व्यक्तिगत भविष्य की भविष्यवाणी प्राप्त करें। जानें कि ब्रह्मांड ने आपकी यात्रा के लिए क्या योजना बनाई है।',
    'home.dailyHoroscopes': 'दैनिक राशिफल',
    'home.dailyHoroscopesDesc': 'ब्रह्मांडीय मार्गदर्शन के साथ अपना दिन शुरू करें। अपने कार्यों को खगोलीय ऊर्जाओं के साथ संरेखित करने के लिए दैनिक और साप्ताहिक राशिफल पढ़ें।',
    'home.expertGuidance': 'विशेषज्ञ मार्गदर्शन',
    'home.expertGuidanceDesc': 'व्यक्तिगत परामर्श और अपने ब्रह्मांडीय खाके में गहरी अंतर्दृष्टि के लिए हमारे अनुभवी ज्योतिषी से जुड़ें।',
    'home.whatIsAstrology': 'ज्योतिष क्या है?',
    'home.astrologyDesc': 'ज्योतिष यह समझने की प्राचीन कला और विज्ञान है कि खगोलीय गतिविधियां मानव जीवन और पार्थिव घटनाओं को कैसे प्रभावित करती हैं। हजारों वर्षों से, दुनिया भर की संस्कृतियों ने मार्गदर्शन, ज्ञान और अंतर्दृष्टि के लिए तारों की ओर देखा है।',
    'home.zodiacSigns': 'राशि चक्र',
    'home.zodiacSignsDesc': 'राशि चक्र में बारह राशियां होती हैं, जिनमें से प्रत्येक विभिन्न व्यक्तित्व लक्षणों, शक्तियों और विशेषताओं का प्रतिनिधित्व करती है। आपकी सूर्य राशि, जो आपकी जन्म तिथि से निर्धारित होती है, आपके मूल स्वभाव में अंतर्दृष्टि प्रदान करती है।',
    'home.cosmicInfluence': 'ब्रह्मांडीय प्रभाव',
    'home.cosmicInfluenceDesc': 'ग्रहों की स्थिति और गतिविधियां ऊर्जावान पैटर्न बनाती हैं जो रिश्तों, करियर, स्वास्थ्य और व्यक्तिगत विकास के अवसरों सहित जीवन के विभिन्न पहलुओं को प्रभावित कर सकती हैं।',
    
    // Predictions Page
    'predictions.title': 'आपकी व्यक्तिगत भविष्यवाणी',
    'predictions.subtitle': 'यह जानने के लिए अपनी जन्म तिथि दर्ज करें कि ब्रह्मांड आपके भविष्य के लिए क्या लेकर आया है। हमारी भविष्यवाणियां प्राचीन ज्योतिषीय ज्ञान और खगोलीय अंतर्दृष्टि के आधार पर तैयार की गई हैं।',
    'predictions.birthDate': 'आपकी जन्म तिथि',
    'predictions.revealDestiny': 'अपनी नियति का खुलासा करें',
    'predictions.youAre': 'आप हैं',
    'predictions.bornBetween': 'के बीच जन्मे',
    'predictions.career': 'करियर और वित्त',
    'predictions.love': 'प्रेम और रिश्ते',
    'predictions.personal': 'व्यक्तिगत विकास',
    'predictions.overall': 'समग्र दृष्टिकोण',
    'predictions.readyToExplore': 'अपना भविष्य जानने के लिए तैयार हैं?',
    'predictions.enterBirthDate': 'अपने करियर, रिश्तों और व्यक्तिगत विकास यात्रा के बारे में विस्तृत भविष्यवाणी प्राप्त करने के लिए ऊपर अपनी जन्म तिथि दर्ज करें।',
    
    // Kundali Page
    'kundali.title': 'कुंडली निर्माता',
    'kundali.subtitle': 'अपने सटीक जन्म विवरण के आधार पर अपनी विस्तृत जन्म कुंडली बनाएं। ग्रहों की स्थिति और आपके जीवन पर उनके प्रभाव की खोज करें।',
    'kundali.birthDetails': 'जन्म विवरण',
    'kundali.fullName': 'पूरा नाम',
    'kundali.birthTime': 'जन्म समय',
    'kundali.birthPlace': 'जन्म स्थान',
    'kundali.generateKundali': 'कुंडली बनाएं',
    'kundali.yourBirthChart': 'आपकी जन्म कुंडली',
    'kundali.planetaryPositions': 'ग्रहों की स्थिति',
    'kundali.houses': 'भाव',
    'kundali.aspects': 'ग्रहीय दृष्टि',
    'kundali.basicInfo': 'मूलभूत जानकारी',
    'kundali.sunSign': 'सूर्य राशि',
    'kundali.moonSign': 'चंद्र राशि',
    'kundali.ascendant': 'लग्न',
    'kundali.nakshatra': 'नक्षत्र',
    'kundali.planet': 'ग्रह',
    'kundali.sign': 'राशि',
    'kundali.house': 'भाव',
    'kundali.degree': 'अंश',
    'kundali.houseNumber': 'भाव',
    'kundali.houseRuler': 'स्वामी',
    'kundali.houseSignificance': 'महत्व',
    'kundali.aspectType': 'दृष्टि',
    'kundali.planets': 'ग्रह',
    'kundali.strength': 'बल',
    
    // Horoscope Page
    'horoscope.title': 'राशिफल पठन',
    'horoscope.subtitle': 'जानें कि आज और इस सप्ताह तारों ने आपके लिए क्या संरेखित किया है। व्यक्तिगत ब्रह्मांडीय मार्गदर्शन प्राप्त करने के लिए अपनी राशि का चयन करें।',
    'horoscope.daily': 'दैनिक',
    'horoscope.weekly': 'साप्ताहिक',
    'horoscope.chooseSign': 'अपनी राशि चुनें',
    'horoscope.selectSign': 'अपना व्यक्तिगत राशिफल पढ़ने के लिए ऊपर दिए गए ग्रिड से अपनी राशि का चयन करें।',
    'horoscope.general': 'सामान्य अवलोकन',
    'horoscope.loveRelationships': 'प्रेम और रिश्ते',
    'horoscope.careerMoney': 'करियर और धन',
    'horoscope.luckyNumbers': 'भाग्यशाली संख्या और रंग',
    
    // Astrologer Page
    'astrologer.title': 'अपने ज्योतिषी से मिलें',
    'astrologer.subtitle': 'लूना स्टारवीवर से जुड़ें, हमारे विशेषज्ञ ज्योतिषी जिनके पास तारों के ज्ञान के माध्यम से आत्माओं का मार्गदर्शन करने का 15 से अधिक वर्षों का अनुभव है।',
    'astrologer.name': 'लूना स्टारवीवर',
    'astrologer.title2': 'प्रमाणित ज्योतिषी और आध्यात्मिक गुरु',
    'astrologer.experience': '15+ वर्षों का अनुभव',
    'astrologer.rating': '5.0 रेटिंग (500+ रीडिंग)',
    'astrologer.bio': 'लूना बचपन से ही खगोलीय कलाओं का अध्ययन कर रही हैं, अपनी दादी के नक्शेकदम पर चलते हुए जो एक प्रसिद्ध रहस्यवादी थीं। अंतर्राष्ट्रीय ज्योतिषीय अनुसंधान सोसायटी से प्रमाणन और वर्षों के समर्पित अभ्यास के साथ, लूना पारंपरिक ज्योतिषीय ज्ञान को आधुनिक मनोवैज्ञानिक अंतर्दृष्टि के साथ जोड़ती हैं।',
    'astrologer.bookConsultation': 'परामर्श बुक करें',
    'astrologer.sendMessage': 'संदेश भेजें',
    'astrologer.expertise': 'विशेषज्ञता के क्षेत्र',
    'astrologer.consultationOptions': 'परामर्श विकल्प',
    'astrologer.personalReading': 'व्यक्तिगत पठन',
    'astrologer.relationshipCompatibility': 'रिश्ते की अनुकूलता',
    'astrologer.careerLifePath': 'करियर और जीवन पथ',
    'astrologer.availableHours': 'उपलब्ध समय',
    'astrologer.testimonials': 'ग्राहक प्रशंसापत्र',
    'astrologer.readyForReading': 'अपना पथ खोजने के लिए तैयार हैं?',
    'astrologer.bookPersonal': 'लूना के साथ व्यक्तिगत परामर्श बुक करें और उन ब्रह्मांडीय अंतर्दृष्टियों को अनलॉक करें जो आपको आपकी उच्चतम क्षमता की ओर मार्गदर्शन करेंगी।',
    
    // Contact Page
    'contact.title': 'हमसे जुड़ें',
    'contact.subtitle': 'अपनी ब्रह्मांडीय यात्रा के बारे में प्रश्न हैं? परामर्श बुक करने के लिए तैयार हैं? हम ब्रह्मांड के रहस्यों के माध्यम से आपका मार्गदर्शन करने के लिए यहाँ हैं।',
    'contact.sendMessage': 'हमें संदेश भेजें',
    'contact.messageSent': 'संदेश भेजा गया!',
    'contact.thankYou': 'संपर्क करने के लिए धन्यवाद। हम 24 घंटों के भीतर जवाब देंगे।',
    'contact.fullName': 'पूरा नाम',
    'contact.emailAddress': 'ईमेल पता',
    'contact.phoneNumber': 'फोन नंबर',
    'contact.consultationType': 'परामर्श प्रकार',
    'contact.subject': 'विषय',
    'contact.message': 'संदेश',
    'contact.whatCanWeHelp': 'हम आपकी कैसे मदद कर सकते हैं?',
    'contact.tellUs': 'हमें अपने प्रश्नों के बारे में बताएं या आप क्या जानना चाहते हैं...',
    'contact.getInTouch': 'संपर्क में रहें',
    'contact.phone': 'फोन',
    'contact.email': 'ईमेल',
    'contact.location': 'स्थान',
    'contact.whyChoose': 'एस्ट्रोविज़न क्यों चुनें?',
    'contact.expertGuidance2': 'विशेषज्ञ मार्गदर्शन',
    'contact.personalizedApproach': 'व्यक्तिगत दृष्टिकोण',
    'contact.confidentialCaring': 'गोपनीय और देखभाल',
    
    // Common
    'common.learnMore': 'और जानें',
    'common.scheduleNow': 'अभी शेड्यूल करें',
    'common.callNow': 'अभी कॉल करें',
    'common.required': 'आवश्यक',
    'common.optional': 'वैकल्पिक',
    'common.submit': 'जमा करें',
    'common.send': 'भेजें',
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफलता',
    
    // Zodiac Signs
    'zodiac.aries': 'मेष',
    'zodiac.taurus': 'वृषभ',
    'zodiac.gemini': 'मिथुन',
    'zodiac.cancer': 'कर्क',
    'zodiac.leo': 'सिंह',
    'zodiac.virgo': 'कन्या',
    'zodiac.libra': 'तुला',
    'zodiac.scorpio': 'वृश्चिक',
    'zodiac.sagittarius': 'धनु',
    'zodiac.capricorn': 'मकर',
    'zodiac.aquarius': 'कुंभ',
    'zodiac.pisces': 'मीन',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};