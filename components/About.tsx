import React from 'react';
import { Heart, Handshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">ABOUT US</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            About Us
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          
          {/* Main Content */}
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="text-left">
              <div className="bg-blue-900 rounded-full p-6 shadow-xl inline-flex mb-6">
                <Heart className="w-12 h-12 text-yellow-400" />
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Searching for a reputable flooring, surfaces coatings contractor with a proven track record, then ABS is the contractor for you.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Based out of Phoenix, AZ and serving a wide range of multi faceted commercial and private clients across the Southwestern United States, ABS Floor Coverings is a trusted turnkey flooring and wall solution contractor with over 100 years of combined industry experience. There is no project or installation too big, complex or technical, and if it has never been done before, we will be sure to formulate a resolution that will be backed by our installation warranty. Our extensive background in unique and highly difficult installations, whether horizontal or vertical, now serves as a manifold of experience comprising of all the skill sets and industry know how needed, to bring your vision to life. Whether it be in the Public, Federal, Military, Private or Industrial sector, we have the familiarity that comes with the pressures of fast track, high pressure, and critical path installations all the while sustaining a level of quality typical to even the most discriminative of clients.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-blue-900 rounded-full p-4 shadow-xl inline-flex mb-4">
                <Handshake className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
            </div>

            <div className="text-left">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Commercial organizations, construction and renovation contractors, housing management agencies, and homeowners throughout Phoenix, Dallas, El Paso, Denver, Las Vegas, and beyond have relied on the superior flooring selection and attention to detail at ABS that's difficult to achieve anywhere else. With an extensive flooring showroom in Phoenix and onsite surfacing and coatings installation services, we offer the complete flooring solution that's right for your business or home, regardless of property size, style, or project scope.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ABS Floor Covering is a hardwood flooring contractor specializing in floor installation, hardwood floor restoration, polished & stained concrete, and more, serving Tempe, Scottsdale, Chandler, Mesa, Gilbert, Ahwatukee, Glendale, and the surrounding Phoenix AZ region.
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                ELEVATE YOUR SPACE WITH ABS FLOOR COVERING
          </h2>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;


