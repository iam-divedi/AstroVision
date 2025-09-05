import React, { useState } from 'react';
import { Sun, Moon, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getHoroscope } from '../utils/astrology';

const Horoscope = () => {
  const { t } = useLanguage();
  const [selectedSign, setSelectedSign] = useState('');
  const [timeFrame, setTimeFrame] = useState('daily');

  const zodiacSigns = [
    { name: t('zodiac.aries'), key: 'Aries', symbol: '♈', emoji: '🐏', dates: 'Mar 21 - Apr 19' },
    { name: t('zodiac.taurus'), key: 'Taurus', symbol: '♉', emoji: '🐂', dates: 'Apr 20 - May 20' },
    { name: t('zodiac.gemini'), key: 'Gemini', symbol: '♊', emoji: '👥', dates: 'May 21 - Jun 20' },
    { name: t('zodiac.cancer'), key: 'Cancer', symbol: '♋', emoji: '🦀', dates: 'Jun 21 - Jul 22' },
    { name: t('zodiac.leo'), key: 'Leo', symbol: '♌', emoji: '🦁', dates: 'Jul 23 - Aug 22' },
    { name: t('zodiac.virgo'), key: 'Virgo', symbol: '♍', emoji: '👩', dates: 'Aug 23 - Sep 22' },
    { name: t('zodiac.libra'), key: 'Libra', symbol: '♎', emoji: '⚖️', dates: 'Sep 23 - Oct 22' },
    { name: t('zodiac.scorpio'), key: 'Scorpio', symbol: '♏', emoji: '🦂', dates: 'Oct 23 - Nov 21' },
    { name: t('zodiac.sagittarius'), key: 'Sagittarius', symbol: '♐', emoji: '🏹', dates: 'Nov 22 - Dec 21' },
    { name: t('zodiac.capricorn'), key: 'Capricorn', symbol: '♑', emoji: '🐐', dates: 'Dec 22 - Jan 19' },
    { name: t('zodiac.aquarius'), key: 'Aquarius', symbol: '♒', emoji: '🏺', dates: 'Jan 20 - Feb 18' },
    { name: t('zodiac.pisces'), key: 'Pisces', symbol: '♓', emoji: '🐟', dates: 'Feb 19 - Mar 20' },
  ];

  const horoscope = selectedSign ? getHoroscope(selectedSign, timeFrame) : null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
          {t('horoscope.title')}
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {t('horoscope.subtitle')}
        </p>
      </div>

      {/* Time Frame Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-lg">
          <button
            onClick={() => setTimeFrame('daily')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
              timeFrame === 'daily'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:text-indigo-600'
            }`}
          >
            <Sun className="h-4 w-4" />
            <span>{t('horoscope.daily')}</span>
          </button>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-lg ml-2">
          <button
            onClick={() => setTimeFrame('weekly')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
              timeFrame === 'weekly'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:text-indigo-600'
            }`}
          >
            <Moon className="h-4 w-4" />
            <span>{t('horoscope.weekly')}</span>
          </button>
        </div>
      </div>

      {/* Zodiac Signs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {zodiacSigns.map((sign) => (
          <button
            key={sign.key}
            onClick={() => setSelectedSign(sign.key)}
            className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 text-center ${
              selectedSign === sign.key
                ? 'ring-2 ring-indigo-500 bg-indigo-50'
                : 'hover:bg-white'
            }`}
          >
            <div className="text-3xl mb-2">{sign.emoji}</div>
            <h3 className="font-semibold text-gray-800 text-lg">{sign.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{sign.dates}</p>
          </button>
        ))}
      </div>

      {/* Horoscope Display */}
      {horoscope && (
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">
                {zodiacSigns.find(s => s.name === selectedSign)?.emoji}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {zodiacSigns.find(s => s.key === selectedSign)?.name} {timeFrame === 'daily' ? t('horoscope.daily') : t('horoscope.weekly')} Horoscope
            </h2>
            <p className="text-lg text-gray-600">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                {t('horoscope.general')}
              </h3>
              <p className="text-gray-700 leading-relaxed">{horoscope.general}</p>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-xl mr-2">💕</span>
                {t('horoscope.loveRelationships')}
              </h3>
              <p className="text-gray-700 leading-relaxed">{horoscope.love}</p>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-xl mr-2">💼</span>
                {t('horoscope.careerMoney')}
              </h3>
              <p className="text-gray-700 leading-relaxed">{horoscope.career}</p>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-xl mr-2">🌟</span>
                {t('horoscope.luckyNumbers')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Lucky Numbers:</strong> {horoscope.luckyNumbers.join(', ')}<br/>
                <strong>Lucky Color:</strong> {horoscope.luckyColor}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!selectedSign && (
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('horoscope.chooseSign')}
          </h3>
          <p className="text-gray-600">
            {t('horoscope.selectSign')}
          </p>
        </div>
      )}
    </div>
  );
};

export default Horoscope;