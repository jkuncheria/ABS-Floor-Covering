import React from 'react';
import { Heart, MapPin, Clock, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHome: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md w-full">
              <img 
                src="/abs-building.png" 
                alt="ABS Floor Covering Company - Phoenix, Arizona" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Based in Phoenix, AZ, ABS Floor Covering is a trusted flooring and wall solution contractor with over 100 years of combined industry experience. We serve commercial and private clients across the Southwestern United States, handling projects of any size or complexity with expert craftsmanship and installation warranties.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Heart className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Why Choose Us?</h3>
                  <p className="text-gray-600">Commercial clients throughout Phoenix, Dallas, El Paso, Denver, Las Vegas, and beyond trust ABS for superior flooring selection and exceptional attention to detail.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Serving the Southwest</h3>
                  <p className="text-gray-600">Our Phoenix showroom and onsite installation services provide complete flooring solutions for any property size or project scope.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Expert Services</h3>
                  <p className="text-gray-600">We specialize in hardwood flooring, installation, restoration, polished & stained concrete, and more throughout the Phoenix metro area.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Handshake className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Over 100 Years of Combined Experience</h3>
                  <p className="text-gray-600">Our team brings extensive expertise in complex installations and the industry knowledge needed to bring your vision to life.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about"
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Learn More About Us
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-lg transition-all text-center"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHome;

