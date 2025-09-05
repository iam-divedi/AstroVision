import React, { useState } from 'react';
import { Calendar, Stars, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getZodiacSign, generatePrediction } from '../utils/astrology';

const Predictions = () => {
  const { t } = useLanguage();
  const [birthDate, setBirthDate] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [zodiacSign, setZodiacSign] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthDate) {
      const sign = getZodiacSign(new Date(birthDate));
      const pred = generatePrediction(sign);
      setZodiacSign(sign);
      setPrediction(pred);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
          {t('predictions.title')}
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {t('predictions.subtitle')}
        </p>
      </div>

      {/* Input Form */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-6">
            <label htmlFor="birthDate" className="block text-lg font-semibold text-gray-800 mb-2">
              <Calendar className="inline h-5 w-5 mr-2" />
              {t('predictions.birthDate')}
            </label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Stars className="h-5 w-5" />
            <span>{t('predictions.revealDestiny')}</span>
          </button>
        </form>
      </div>

      {/* Prediction Result */}
      {prediction && (
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sparkles className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {t('predictions.youAre')} {zodiacSign}
            </h2>
            <p className="text-lg text-gray-600">
              {t('predictions.bornBetween')} {prediction.dateRange}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/70 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-2xl mr-2">💼</span>
                {t('predictions.career')}
              </h3>
              <p className="text-gray-700">{prediction.career}</p>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-2xl mr-2">💕</span>
                {t('predictions.love')}
              </h3>
              <p className="text-gray-700">{prediction.love}</p>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-2xl mr-2">🌟</span>
                {t('predictions.personal')}
              </h3>
              <p className="text-gray-700">{prediction.personal}</p>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow-md md:col-span-2 lg:col-span-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔮</span>
                {t('predictions.overall')}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">{prediction.overall}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      {!prediction && (
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('predictions.readyToExplore')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('predictions.enterBirthDate')}
          </p>
        </div>
      )}
    </div>
  );
};

export default Predictions;