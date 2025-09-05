export interface Prediction {
  dateRange: string;
  career: string;
  love: string;
  personal: string;
  overall: string;
}

export interface Horoscope {
  general: string;
  love: string;
  career: string;
  luckyNumbers: number[];
  luckyColor: string;
}

export const getZodiacSign = (date: Date): string => {
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

export const generatePrediction = (zodiacSign: string): Prediction => {
  const predictions: Record<string, Prediction> = {
    Aries: {
      dateRange: 'March 21 - April 19',
      career: 'Your leadership qualities will shine in the coming months. A new opportunity in your professional life awaits, possibly involving a leadership role or entrepreneurial venture.',
      love: 'Passionate energy surrounds your romantic life. If single, expect to meet someone who matches your adventurous spirit. Existing relationships will experience renewed excitement.',
      personal: 'This is a time for bold action and new beginnings. Trust your instincts and take calculated risks. Your natural courage will guide you toward success.',
      overall: 'The stars indicate a period of significant growth and transformation. Your pioneering spirit will lead you to exciting new territories. Stay focused on your goals and maintain your characteristic determination.'
    },
    Taurus: {
      dateRange: 'April 20 - May 20',
      career: 'Stability and steady progress mark your professional path. Your practical approach will be recognized and rewarded. Financial opportunities are on the horizon.',
      love: 'Your relationships deepen through consistent care and attention. Venus blesses your romantic endeavors with lasting connections and meaningful moments of intimacy.',
      personal: 'Focus on building solid foundations in all areas of life. Your patience and persistence will pay off. Consider investing in long-term goals and personal development.',
      overall: 'The universe supports your methodical approach to life. Your reliability and dedication create lasting success. Trust in the process and continue building your dreams step by step.'
    },
    Gemini: {
      dateRange: 'May 21 - June 20',
      career: 'Communication and networking open new doors. Your versatility and quick thinking lead to multiple opportunities. Consider roles involving writing, teaching, or technology.',
      love: 'Intellectual connections spark romantic interest. Engaging conversations and shared interests form the foundation of meaningful relationships. Keep an open mind to new possibilities.',
      personal: 'Your curiosity leads to exciting discoveries. Embrace learning opportunities and stay flexible to change. Your adaptability is your greatest strength right now.',
      overall: 'Mercury enhances your communication abilities and brings variety to your life. Your quick wit and charm attract positive people and opportunities. Stay curious and embrace diversity.'
    },
    Cancer: {
      dateRange: 'June 21 - July 22',
      career: 'Your intuitive abilities guide professional decisions. Roles involving caregiving, counseling, or creative endeavors flourish. Trust your emotional intelligence in business matters.',
      love: 'Deep emotional connections strengthen existing bonds. Family and close relationships take priority. Your nurturing nature attracts those seeking genuine care and understanding.',
      personal: 'Honor your emotional needs and create a secure foundation. Home and family matters require attention. Your sensitivity is a gift that helps others heal.',
      overall: 'The Moon illuminates your path toward emotional fulfillment. Your caring nature creates ripples of positive change. Focus on creating security and nurturing meaningful connections.'
    },
    Leo: {
      dateRange: 'July 23 - August 22',
      career: 'Your natural charisma opens doors to leadership positions. Creative projects and public-facing roles bring recognition. Your confidence inspires others to follow your vision.',
      love: 'Romance takes center stage with dramatic gestures and grand declarations. Your magnetic personality attracts admiration. Existing relationships benefit from increased passion and playfulness.',
      personal: 'Self-expression and creativity flow freely. Pursue artistic endeavors and showcase your talents. Your authentic self shines brightest when you embrace your uniqueness.',
      overall: 'The Sun empowers your journey toward recognition and success. Your generous heart and creative spirit inspire others. Step into the spotlight with confidence and share your gifts with the world.'
    },
    Virgo: {
      dateRange: 'August 23 - September 22',
      career: 'Attention to detail and analytical skills prove invaluable. Health, service, or organizational roles offer growth opportunities. Your perfectionist nature leads to high-quality results.',
      love: 'Practical expressions of love strengthen relationships. Small, thoughtful gestures mean more than grand displays. Your reliability makes you a cherished partner.',
      personal: 'Focus on health and daily routines. Your systematic approach to self-improvement yields excellent results. Organization and planning support your goals.',
      overall: 'Mercury supports your quest for perfection and service to others. Your methodical nature creates order from chaos. Trust in your ability to improve and refine every aspect of life.'
    },
    Libra: {
      dateRange: 'September 23 - October 22',
      career: 'Partnership and collaboration lead to success. Your diplomatic skills shine in negotiations and team environments. Legal or artistic fields offer promising opportunities.',
      love: 'Harmony and balance enhance all relationships. Your charm and fairness attract potential partners. Existing relationships benefit from increased cooperation and understanding.',
      personal: 'Seek balance in all aspects of life. Your aesthetic sense guides you toward beauty and harmony. Consider artistic pursuits or design-related activities.',
      overall: 'Venus blesses you with grace and charm. Your ability to see multiple perspectives makes you a valuable mediator. Focus on creating beauty and harmony in your environment.'
    },
    Scorpio: {
      dateRange: 'October 23 - November 21',
      career: 'Deep research and investigative skills open unique opportunities. Psychology, healing, or transformative work calls to you. Your intensity drives powerful results.',
      love: 'Passionate and transformative connections await. Your magnetic nature attracts deep, meaningful relationships. Be prepared for emotional intensity and profound bonding.',
      personal: 'This is a time of deep personal transformation. Embrace change and release what no longer serves you. Your resilience helps you rise from any challenge stronger.',
      overall: 'Pluto guides your journey of transformation and rebirth. Your ability to navigate deep waters makes you incredibly powerful. Trust in your capacity for renewal and regeneration.'
    },
    Sagittarius: {
      dateRange: 'November 22 - December 21',
      career: 'International opportunities or higher education feature prominently. Your philosophical nature and love of adventure open doors to teaching, publishing, or travel-related work.',
      love: 'Long-distance relationships or connections with foreign cultures play a role. Your optimistic nature attracts fellow adventurers. Shared beliefs and values deepen bonds.',
      personal: 'Expand your horizons through travel, learning, or spiritual exploration. Your quest for truth and meaning guides important decisions. Stay open to new philosophies.',
      overall: 'Jupiter expands your world in meaningful ways. Your adventurous spirit and philosophical nature attract abundance. Follow your arrows of intention toward distant but worthy goals.'
    },
    Capricorn: {
      dateRange: 'December 22 - January 19',
      career: 'Steady climb toward authority and recognition continues. Your discipline and traditional approach earn respect. Long-term career goals come into focus with clear action steps.',
      love: 'Mature and stable relationships develop slowly but surely. Your reliability attracts those seeking long-term commitment. Traditional expressions of love resonate deeply.',
      personal: 'Build lasting structures in your personal life. Your patience and persistence create enduring success. Focus on long-term goals rather than quick fixes.',
      overall: 'Saturn rewards your discipline and hard work with lasting achievements. Your mountain-climbing approach to life ensures steady progress. Trust in your ability to reach the summit.'
    },
    Aquarius: {
      dateRange: 'January 20 - February 18',
      career: 'Innovation and technology open exciting new paths. Your humanitarian nature leads to meaningful work that benefits society. Group projects and collaborative efforts flourish.',
      love: 'Unconventional relationships or unique expressions of love emerge. Your independence attracts like-minded individuals. Friendship forms the foundation of romantic connections.',
      personal: 'Embrace your uniqueness and challenge conventional thinking. Your progressive ideas inspire others. Social causes and group activities energize your spirit.',
      overall: 'Uranus supports your quest for freedom and innovation. Your ability to see the future attracts forward-thinking opportunities. Stay true to your vision of a better world.'
    },
    Pisces: {
      dateRange: 'February 19 - March 20',
      career: 'Creative and healing professions call to your compassionate nature. Your intuition guides you toward meaningful work that touches souls. Artistic endeavors flourish.',
      love: 'Romantic and spiritual connections deepen your understanding of love. Your empathetic nature creates profound emotional bonds. Dreams and intuition guide romantic decisions.',
      personal: 'Trust your inner wisdom and psychic abilities. Your connection to the spiritual realm strengthens. Meditation and creative expression enhance your well-being.',
      overall: 'Neptune enhances your intuitive and creative gifts. Your compassionate heart heals others through your presence. Flow with the cosmic currents and trust in divine timing.'
    }
  };

  return predictions[zodiacSign] || predictions.Aries;
};

export const getHoroscope = (zodiacSign: string, timeFrame: string): Horoscope => {
  const baseHoroscopes: Record<string, any> = {
    Aries: {
      daily: {
        general: 'Today brings dynamic energy and the courage to tackle new challenges. Your leadership skills are highlighted, making it an excellent day to initiate projects or lead teams.',
        love: 'Passionate moments await in your romantic life. Express your feelings boldly - your direct approach will be appreciated by your partner or potential love interest.',
        career: 'Professional opportunities emerge that require quick decision-making. Trust your instincts and take calculated risks. Your pioneering spirit opens new doors.',
        luckyNumbers: [3, 9, 21, 27],
        luckyColor: 'Crimson Red'
      },
      weekly: {
        general: 'This week emphasizes new beginnings and bold initiatives. Your natural leadership qualities shine, attracting opportunities that align with your ambitious nature.',
        love: 'Romance takes on an adventurous tone. If single, expect exciting encounters. Couples should plan spontaneous activities to reignite the spark in their relationship.',
        career: 'A significant career opportunity presents itself mid-week. Your competitive edge and innovative thinking set you apart from the crowd. Embrace challenges with confidence.',
        luckyNumbers: [1, 8, 15, 22],
        luckyColor: 'Fiery Orange'
      }
    },
    Taurus: {
      daily: {
        general: 'Steady progress and practical solutions mark today\'s energy. Focus on building solid foundations and trust in your methodical approach to challenges.',
        love: 'Sensual pleasures and intimate moments enhance your relationships. Small gestures of affection create lasting impressions. Quality time together deepens bonds.',
        career: 'Financial matters require careful attention. Your practical nature helps you make sound decisions regarding investments or business partnerships.',
        luckyNumbers: [6, 14, 23, 32],
        luckyColor: 'Emerald Green'
      },
      weekly: {
        general: 'This week rewards patience and persistence. Your steady approach to goals yields tangible results. Focus on long-term planning and sustainable growth.',
        love: 'Relationships benefit from consistency and reliability. Plan romantic activities that appeal to the senses - cooking together or nature walks create beautiful memories.',
        career: 'Professional stability improves through your dedicated efforts. A financial opportunity or promotion becomes available toward the weekend.',
        luckyNumbers: [2, 6, 18, 26],
        luckyColor: 'Rose Pink'
      }
    }
    // Add more signs as needed...
  };

  // Generate horoscopes for remaining signs
  const fallbackHoroscope = {
    general: `${timeFrame === 'daily' ? 'Today' : 'This week'} brings positive energy aligned with your ${zodiacSign} nature. Trust your instincts and stay true to your values.`,
    love: `Your romantic life benefits from authentic expression. ${timeFrame === 'daily' ? 'Today' : 'This week'} offers opportunities to deepen connections with those you care about.`,
    career: `Professional matters flow smoothly when you leverage your natural ${zodiacSign} strengths. Focus on what you do best.`,
    luckyNumbers: [Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1],
    luckyColor: ['Purple', 'Blue', 'Gold', 'Silver', 'Pink'][Math.floor(Math.random() * 5)]
  };

  return baseHoroscopes[zodiacSign]?.[timeFrame] || fallbackHoroscope;
};