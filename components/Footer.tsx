import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 pt-16 pb-8 px-4 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <Link to="/" onClick={scrollToTop} className="inline-block mb-4">
              <img 
                src="/abslogo.webp" 
                alt="ABS Floor Covering - Commercial Flooring Contractor Phoenix AZ" 
                loading="lazy"
                width="160"
                height="64"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              1430 N 29th Ave<br />
              Phoenix, AZ 85009
            </p>
            <div className="text-sm text-gray-600 mb-4 space-y-1">
              <p><a href="tel:16024151919" className="hover:text-blue-900">602-415-1919</a></p>
              <p><a href="mailto:terry@absflooring.com" className="hover:text-blue-900">terry@absflooring.com</a></p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ABSFloors/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-900 transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="https://www.linkedin.com/company/abs-floor-covering/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Products</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/all-flooring-products" onClick={scrollToTop} className="hover:text-blue-900">
                  All Flooring Products
                </Link>
              </li>
              <li>
                <Link to="/hardwood" onClick={scrollToTop} className="hover:text-blue-900">
                  Hardwood
                </Link>
              </li>
              <li>
                <Link to="/carpet" onClick={scrollToTop} className="hover:text-blue-900">
                  Carpet
                </Link>
              </li>
              <li>
                <Link to="/luxury-vinyl" onClick={scrollToTop} className="hover:text-blue-900">
                  Luxury Vinyl
                </Link>
              </li>
              <li>
                <Link to="/tile" onClick={scrollToTop} className="hover:text-blue-900">
                  Tile
                </Link>
              </li>
              <li>
                <Link to="/laminate" onClick={scrollToTop} className="hover:text-blue-900">
                  Laminate
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/commercial" onClick={scrollToTop} className="hover:text-blue-900">
                  Commercial Flooring
                </Link>
              </li>
              <li>
                <Link to="/residential" onClick={scrollToTop} className="hover:text-blue-900">
                  Residential & Multi-Family
                </Link>
              </li>
              <li>
                <Link to="/polished-concrete" onClick={scrollToTop} className="hover:text-blue-900">
                  Polished Concrete
                </Link>
              </li>
              <li>
                <Link to="/stained-concrete" onClick={scrollToTop} className="hover:text-blue-900">
                  Stained Concrete
                </Link>
              </li>
              <li>
                <Link to="/epoxy-flooring" onClick={scrollToTop} className="hover:text-blue-900">
                  Epoxy Flooring
                </Link>
              </li>
              <li>
                <Link to="/floor-restoration" onClick={scrollToTop} className="hover:text-blue-900">
                  Floor Restoration
                </Link>
              </li>
              <li>
                <Link to="/moisture-testing" onClick={scrollToTop} className="hover:text-blue-900">
                  Moisture Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations & Resources */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Locations</h4>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>
                <Link to="/commercial-flooring-phoenix" onClick={scrollToTop} className="hover:text-blue-900">
                  Phoenix Commercial
                </Link>
              </li>
              <li>
                <Link to="/commercial-flooring-scottsdale" onClick={scrollToTop} className="hover:text-blue-900">
                  Scottsdale Commercial
                </Link>
              </li>
            </ul>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-blue-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/project-gallery" onClick={scrollToTop} className="hover:text-blue-900">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop} className="hover:text-blue-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-blue-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Hours */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Store Hours</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Monday</span>
                <span>8 AM–5 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Tuesday</span>
                <span>8 AM–5 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Wednesday</span>
                <span>8 AM–5 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Thursday</span>
                <span>8 AM–5 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Friday</span>
                <span>8 AM–5 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Saturday</span>
                <span>Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 ABS Floor Covering. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;