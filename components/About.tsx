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
                Based out of Phoenix, AZ and serving a wide range of multi faceted commercial and private clients across the Southwestern United States, ABS Floor Covering is a trusted turnkey flooring and wall solution contractor with over 100 years of combined industry experience. There is no project or installation too big, complex or technical, and if it has never been done before, we will be sure to formulate a resolution that will be backed by our installation warranty. Our extensive background in unique and highly difficult installations, whether horizontal or vertical, now serves as a manifold of experience comprising of all the skill sets and industry know how needed, to bring your vision to life. Whether it be in the Public, Federal, Military, Private or Industrial sector, we have the familiarity that comes with the pressures of fast track, high pressure, and critical path installations all the while sustaining a level of quality typical to even the most discriminative of clients.
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
                Commercial organizations, construction and renovation contractors, and property management agencies throughout Phoenix, Dallas, El Paso, Denver, Las Vegas, and beyond have relied on the superior flooring selection and attention to detail at ABS that's difficult to achieve anywhere else. With an extensive flooring showroom in Phoenix and onsite surfacing and coatings installation services, we offer the complete flooring solution that's right for your commercial project, regardless of property size, style, or project scope.
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

        {/* ICRI Certification Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ICRI Certified Testing Company
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            </div>

            <div className="text-left space-y-6">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong className="text-blue-900">ABS Floor Covering is now an ICRI Certified Testing Company</strong>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Recently ABS's Chris Spillane traveled to Atlanta and acquired his Certified Concrete and Slab Moisture Testing Technician Certification (CCSMTT) thereby allowing ABS to now perform certified testing.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ABS can also be utilized as a certified 3rd party testing agency on projects or installations whereby we are not the flooring installation company. Our services are not only available here locally in the Valley of the Sun but also across all the southwest.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-blue-200 mt-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  THE FOLLOWING ASTM TESTS ARE NOW PERFORMED BY ABS FLOOR COVERING:
                </h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>• ASTM F710 – PH/ Alkalinity Test</li>
                  <li>• ASTM F1869 – Calcium Chloride Test</li>
                  <li>• ASTM F2170 – In situ probe Relative Humidity Test</li>
                  <li>• ASTM 2659 – Electronic Moisture Meter Test</li>
                  <li>• ASTM F3191 – Concrete Porosity Test</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  WHAT is slab moisture and vapor emissions?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Although many people use the terms "concrete" and "cement" interchangeably, one is actually part of the other. Cement is the powder that is mixed with water, sand, and aggregate to create concrete. When cement is added to these ingredients, a chemical reaction takes place that binds them together and forms a concrete substrate. Depending on the thickness of the concrete pour and environmental factors, such as ambient temperature and the humidity of the air, concrete typically takes several weeks to cure. Even after this time, a cured concrete substrate can still contain almost two-thirds of the moisture from the original mixture. This amount of water is too much for a coating system to adhere properly to the surface. Over time, the concrete continues to dry through moisture vapor transmission. The pressure within the porous substrate draws moisture up through capillary action to the surface of the slab where it evaporates into the atmosphere. The only way to determine if concrete is dry enough to receive a coating system or if moisture mitigation is necessary is by conducting moisture testing. It is not uncommon to also find high moisture vapor emission from older concrete slabs. This can be due to poorly placed, damaged or missing moisture barriers beneath the concrete slab. Ground water can penetrate the concrete slab, move through the capillaries in the concrete and cause damage to the floor covering. This can even be a seasonal issue when the water table rises or there is an increased irrigation of the landscaping. Plumbing leaks in the concrete slab can also be a source of moisture. This can increase the moisture and relative humidity of the slab, making this an issue found in both remodel and new construction projects.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  WHY PERFORM CERTIFIED SLAB MOISTURE TESTING?
                </h3>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    <strong className="text-blue-900">– To HONOR all warranties.</strong> The great majority of flooring manufacturers will not honor their warranties without pre-installation slab moisture testing. Additionally, licensed flooring installers reserve the right to refuse to install without moisture testing and or request waiver's that protect them from failures/damages to any floor deriving from slab moisture issues, whereby no testing was performed prior to install.
                  </p>
                  <p>
                    <strong className="text-blue-900">-To ensure that the appropriate products are being utilized.</strong> It is vitally important to test your concrete slab's moisture before installing flooring over it. The definitive test is with ASTM F1869 or a ASTM F2170. Testing with either method will tell you how precisely how much moisture is present, making it possible to choose a surface flooring that is appropriate. Flooring manufacturers rate their products based on the moisture levels they can tolerate, and testing your slab can tell you if a particular flooring material is likely to perform adequately.
                  </p>
                  <p>
                    <strong className="text-blue-900">-Integrity preservation and quality control.</strong> It makes no sense to spend thousands and thousands of dollars on a flooring installation without first ensuring that the slab substrate is suitable and READY to receive floor coverings. Otherwise, the quality and integrity of the install is subject to severe compromise and many a time, remediation. ICRI is the industries most respected and well-known certification due to its level of training and instruction. Having an ICRI certified tester will ensure that you are getting the industry's most recognized testing applications.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  WHO IS RESPONSIBLE FOR MOISTURE TESTING A SLAB?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-900">-CLIENT</strong> has the responsibility of providing a flooring subcontractors with a suitable and acceptable slab for installation. A suitable floor would include any slab that has had slab moisture testing performed on it prior to any installation of flooring.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  WHO SHOULD PERFORM THE MOISTURE TESTING?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In the same manner that concrete placement companies are not allowed to perform their own "sump," testing, the same ethic is endorsed in the flooring division of construction. While companies may have the certifications and expertise to perform ASTM testing on their own installations, it is advised to utilize a 3rd party in the spirit of sustaining the utmost integrity of any given scenario. Preferably, an ICRI certified 3rd party.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  WHEN SHOULD MOISTURE TESTING BE PERFORMED?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Only after an environment has been acclimated (HVAC) to standard operating conditions for a minimum of 48 hours. Moisture emission is contingent upon vapor pressure differences between the substrate and room interior. Temperature and humidity together create a specific static vapor pressure. Concrete slabs often have a much higher static vapor pressure than a room interior. Therefore, in order to accurately measure the potential for a floor system failure, it is necessary to test for vapor emission in respect to the operational-climate of the building.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;


