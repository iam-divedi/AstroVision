import React from 'react';
import { Star, Calendar, Phone, Mail, Award, Clock } from 'lucide-react';

const Astrologer = () => {
  const expertise = [
    'Birth Chart Analysis',
    'Relationship Compatibility',
    'Career Guidance',
    'Spiritual Counseling',
    'Tarot Reading',
    'Numerology'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Luna\'s insights completely changed my perspective on life. Her readings are incredibly accurate and helpful.'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'I was skeptical at first, but Luna\'s guidance helped me make important career decisions with confidence.'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'The relationship compatibility reading was spot-on! Luna has a true gift for understanding people.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Meet Your Astrologer
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Connect with Luna Starweaver, our expert astrologer with over 15 years of experience 
          in guiding souls through the wisdom of the stars.
        </p>
      </div>

      {/* Astrologer Profile */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full w-48 h-48 mx-auto md:mx-0 mb-6 flex items-center justify-center shadow-lg">
              <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center">
                <span className="text-6xl">🌟</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Luna Starweaver</h2>
            <p className="text-xl text-indigo-600 font-semibold mb-4">Certified Astrologer & Spiritual Guide</p>
            
            <div className="flex items-center mb-4">
              <Award className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-gray-700">15+ Years Experience</span>
            </div>
            
            <div className="flex items-center mb-6">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-gray-700">5.0 Rating (500+ Readings)</span>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Luna has been studying the celestial arts since childhood, following in the footsteps 
              of her grandmother who was a renowned mystic. With certifications from the International 
              Society of Astrological Research and years of dedicated practice, Luna combines 
              traditional astrological wisdom with modern psychological insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Book Consultation</span>
              </button>
              <button className="bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise & Services */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Areas of Expertise</h3>
          <div className="grid grid-cols-1 gap-3">
            {expertise.map((skill) => (
              <div key={skill} className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
                <Star className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Consultation Options</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-600 pl-4 py-2">
              <h4 className="font-semibold text-gray-800">Personal Reading</h4>
              <p className="text-gray-600 text-sm">45 minutes • $85</p>
              <p className="text-gray-700 mt-1">Comprehensive birth chart analysis and life guidance</p>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <h4 className="font-semibold text-gray-800">Relationship Compatibility</h4>
              <p className="text-gray-600 text-sm">60 minutes • $120</p>
              <p className="text-gray-700 mt-1">Detailed synastry analysis for couples</p>
            </div>
            
            <div className="border-l-4 border-pink-600 pl-4 py-2">
              <h4 className="font-semibold text-gray-800">Career & Life Path</h4>
              <p className="text-gray-600 text-sm">30 minutes • $65</p>
              <p className="text-gray-700 mt-1">Professional guidance and timing insights</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <span className="font-semibold text-yellow-800">Available Hours</span>
            </div>
            <p className="text-yellow-700 mt-1">Mon-Fri: 10 AM - 8 PM EST</p>
            <p className="text-yellow-700">Weekends: 12 PM - 6 PM EST</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Client Testimonials</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-800">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white mt-12">
        <h3 className="text-2xl font-bold mb-4">Ready to Discover Your Path?</h3>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          Book a personal consultation with Luna and unlock the cosmic insights 
          that will guide you toward your highest potential.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>Call Now: (555) 123-STAR</span>
          </button>
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white border border-indigo-400 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>luna@astrovision.com</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Astrologer;