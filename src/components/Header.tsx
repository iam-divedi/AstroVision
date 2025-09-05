import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stars, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.home'), icon: Sun },
    { path: '/predictions', label: t('nav.predictions'), icon: Stars },
    { path: '/horoscope', label: t('nav.horoscope'), icon: Moon },
    { path: '/kundali', label: t('nav.kundali'), icon: Stars },
    { path: '/astrologer', label: t('nav.astrologer'), icon: Stars },
    { path: '/contact', label: t('nav.contact'), icon: Sun },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Stars className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AstroVision
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === path
                    ? 'bg-indigo-100 text-indigo-700 font-semibold'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          <LanguageToggle />

          {/* Mobile menu - simplified for now */}
          <div className="md:hidden">
            <select 
              className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm"
              value={location.pathname}
              onChange={(e) => window.location.href = e.target.value}
            >
              {navItems.map(({ path, label }) => (
                <option key={path} value={path}>{label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;