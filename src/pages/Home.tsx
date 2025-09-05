import React from 'react';
import { Link } from 'react-router-dom';
import { Stars, Moon, Sun, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
          {t('home.title')}
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          {t('home.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/predictions"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Stars className="h-5 w-5" />
            <span>{t('home.getPrediction')}</span>
          </Link>
          <Link
            to="/horoscope"
            className="bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Moon className="h-5 w-5" />
            <span>{t('home.viewHoroscopes')}</span>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <Stars className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('home.personalPredictions')}</h3>
          <p className="text-gray-600 mb-4">
            {t('home.personalPredictionsDesc')}
          </p>
          <Link to="/predictions" className="text-indigo-600 hover:text-indigo-700 font-medium">
            {t('common.learnMore')} →
          </Link>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <Moon className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('home.dailyHoroscopes')}</h3>
          <p className="text-gray-600 mb-4">
            {t('home.dailyHoroscopesDesc')}
          </p>
          <Link to="/horoscope" className="text-indigo-600 hover:text-indigo-700 font-medium">
            {t('common.learnMore')} →
          </Link>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-pink-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('home.expertGuidance')}</h3>
          <p className="text-gray-600 mb-4">
            {t('home.expertGuidanceDesc')}
          </p>
          <Link to="/astrologer" className="text-indigo-600 hover:text-indigo-700 font-medium">
            {t('common.learnMore')} →
          </Link>
        </div>
      </div>

      {/* About Astrology Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('home.whatIsAstrology')}</h2>
          <p className="text-lg text-gray-700 mb-8">
            {t('home.astrologyDesc')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">{t('home.zodiacSigns')}</h4>
              <p className="text-gray-600">
                {t('home.zodiacSignsDesc')}
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">{t('home.cosmicInfluence')}</h4>
              <p className="text-gray-600">
                {t('home.cosmicInfluenceDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;