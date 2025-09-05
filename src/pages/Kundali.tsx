import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Star, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { generateKundali, KundaliData } from '../utils/kundali';

const Kundali = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  });
  const [kundali, setKundali] = useState<KundaliData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.birthDate && formData.birthTime && formData.birthPlace) {
      const kundaliData = generateKundali(formData);
      setKundali(kundaliData);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
          {t('kundali.title')}
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {t('kundali.subtitle')}
        </p>
      </div>

      {/* Input Form */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('kundali.birthDetails')}</h2>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">
              {t('kundali.fullName')} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="birthDate" className="block text-lg font-semibold text-gray-800 mb-2">
              <Calendar className="inline h-5 w-5 mr-2" />
              {t('predictions.birthDate')} *
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="birthTime" className="block text-lg font-semibold text-gray-800 mb-2">
              <Clock className="inline h-5 w-5 mr-2" />
              {t('kundali.birthTime')} *
            </label>
            <input
              type="time"
              id="birthTime"
              name="birthTime"
              value={formData.birthTime}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="birthPlace" className="block text-lg font-semibold text-gray-800 mb-2">
              <MapPin className="inline h-5 w-5 mr-2" />
              {t('kundali.birthPlace')} *
            </label>
            <input
              type="text"
              id="birthPlace"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleChange}
              placeholder="City, State, Country"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-lg"
              required
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Star className="h-5 w-5" />
              <span>{t('kundali.generateKundali')}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Kundali Display */}
      {kundali && (
        <div className="space-y-8">
          {/* Basic Information */}
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t('kundali.yourBirthChart')} - {kundali.name}
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <Sun className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">{t('kundali.sunSign')}</h3>
                  <p className="text-indigo-600 font-medium">{kundali.basicInfo.sunSign}</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <Moon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">{t('kundali.moonSign')}</h3>
                  <p className="text-indigo-600 font-medium">{kundali.basicInfo.moonSign}</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <Star className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">{t('kundali.ascendant')}</h3>
                  <p className="text-indigo-600 font-medium">{kundali.basicInfo.ascendant}</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <Star className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">{t('kundali.nakshatra')}</h3>
                  <p className="text-indigo-600 font-medium">{kundali.basicInfo.nakshatra}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Birth Chart Grid */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Birth Chart</h3>
            <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
              {Array.from({ length: 12 }, (_, i) => {
                const houseNumber = i + 1;
                const planetsInHouse = kundali.planetaryPositions.filter(p => p.house === houseNumber);
                
                return (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg border-2 border-indigo-200 flex flex-col items-center justify-center p-2 text-xs"
                  >
                    <div className="font-bold text-indigo-800 mb-1">{houseNumber}</div>
                    <div className="text-center">
                      {planetsInHouse.map((planet, idx) => (
                        <div key={idx} className="text-purple-700 font-medium">
                          {planet.planet.substring(0, 2)}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Planetary Positions */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('kundali.planetaryPositions')}</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">{t('kundali.planet')}</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">{t('kundali.sign')}</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">{t('kundali.house')}</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">{t('kundali.degree')}</th>
                  </tr>
                </thead>
                <tbody>
                  {kundali.planetaryPositions.map((position, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium text-gray-800">{position.planet}</td>
                      <td className="px-4 py-3 text-indigo-600">{position.sign}</td>
                      <td className="px-4 py-3 text-purple-600">{position.house}</td>
                      <td className="px-4 py-3 text-gray-700">{position.degree}°</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Houses */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('kundali.houses')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {kundali.houses.map((house, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {t('kundali.houseNumber')} {house.number}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>{t('kundali.houseRuler')}:</strong> {house.ruler}
                  </p>
                  <p className="text-sm text-gray-700">{house.significance}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Planetary Aspects */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('kundali.aspects')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {kundali.aspects.map((aspect, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {aspect.planets.join(' - ')}
                  </h4>
                  <p className="text-sm text-indigo-600 mb-1">
                    <strong>{t('kundali.aspectType')}:</strong> {aspect.aspect}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>{t('kundali.strength')}:</strong> {aspect.strength}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!kundali && (
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Create Your Detailed Birth Chart
          </h3>
          <p className="text-gray-600">
            Fill in your complete birth details above to generate your personalized Kundali 
            with planetary positions, houses, and astrological insights.
          </p>
        </div>
      )}
    </div>
  );
};

export default Kundali;