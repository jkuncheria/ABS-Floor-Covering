import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';

const ProjectGallery: React.FC = () => {
  const seo = SEO_CONFIG.pages.projectGallery;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      category: 'commercial',
      title: 'Embassy Hotel',
      location: 'Phoenix, AZ',
      description: '11 story remodel that consisted of over 200 guest rooms with hexagon porcelain tiles at all unit entries and bathroom floors and showers along with tub surrounds. Double stick carpet at hallways, 12×24 at common areas on guestroom floors. Main lobby was over 12K square feet of 12×24, porcelain tiles planks along with planks on walls, metal tiles over bar, and metal trim, wrapped steps and ramp transitions. Rubber / vinyl flooring at fitness area.',
      image: '/Project-Gallery/embassy-hotel.jpg'
    },
    {
      id: 2,
      category: 'commercial',
      title: 'Inspire Kids',
      location: 'Chandler, AZ',
      description: 'Installation of various vinyl planks throughout all common areas and corridors along with rubber base throughout. Specialized decorative tile installed in restrooms walls and floors, comprised of multi tile patterns. Included was some areas consisting of 3×6 ceramic subway tile and waterproofing on walls in addition to accessory metals.',
      image: '/Project-Gallery/inspire-kids.jpg'
    },
    {
      id: 3,
      category: 'commercial',
      title: 'The Heard Building',
      location: 'Phoenix Downtown, AZ',
      description: '5 levels of flooring and wall installations consisting from 24×24 tile to 8×8 cement tiles along with multiple floors consisting of carpet tiles, vinyl plank and refinished historical mosaic tile corridors.',
      image: '/Project-Gallery/heard-building.jpg'
    },
    {
      id: 4,
      category: 'commercial',
      title: 'Hilton Garden Inn',
      location: 'Tempe, AZ',
      description: 'Garden Inn Hotel was a ground up, new build. All 4 floors along with the 1st floor common areas consisted of: 40,000 Sq/ft of various tile formats throughout rooms, common areas and 1st floor. 2200 Sq/yd of glue down carpet: 1600 Sq/yd of stretch in carpet and stair ways on both sides of hotel.',
      image: '/Project-Gallery/hilton-garden.jpg'
    },
    {
      id: 5,
      category: 'commercial',
      title: 'Coach Stores',
      location: 'Valleywide, AZ',
      description: 'Coach Stores were performed at several different locations ranging from Arrowhead to Fashion Square Mall. Each store consisted of 550 Sq/yd of patterned special custom rugs that required seaming per manufacturers diagrams and allowed very little variance due to the 1″ circles patterned throughout, as well as 350 Sq/ft 24×24″ granite tile throughout certain stores.',
      image: '/Project-Gallery/coach-stores.jpg'
    },
    {
      id: 6,
      category: 'commercial',
      title: 'AMC 24',
      location: 'Ahwatukee, AZ',
      description: 'AMC Ahwatukee was a 24 auditorium full remodel. The install consisted of 12000 Sq/yd of broadloom glue down patterns and inserts. The auditoriums had carpeted walls along with customized stairs, wraps and insets at every platform level. The array of geometric inserts extended out to the common area walkways.',
      image: '/Project-Gallery/amc-theaters.jpg'
    },
    {
      id: 7,
      category: 'commercial',
      title: 'Element Hotel',
      location: 'Chandler, AZ',
      description: 'Element Hotel in Chandler consisted of 4 floors of over 2,300 Sq/yds of inlaid sheet vinyl with pvc underlayment at all the guestrooms, along with over 2000 yards carpet tiles and over 7,000 linear ft of millwork base throughout common areas and guest rooms. The 1st floor areas consisted of sheet vinyl, double stick carpet, glue down broadloom and some epoxy flooring.',
      image: '/Project-Gallery/element-hotel.jpg'
    },
    {
      id: 8,
      category: 'commercial',
      title: 'U of A College of Medicine',
      location: 'Phoenix, AZ',
      description: 'This was part of a Phoenix Historical Society Project. It consisted of installing over 8,000 Sq/ft of re-claimed historical hardwood in an auditorium and classroom/administration buildings. After install, ABS refinished the entire floor until desired consistency and finish was accomplished.',
      image: '/Project-Gallery/uofa-medicine.jpg'
    },
    {
      id: 9,
      category: 'commercial',
      title: 'Cambria Hotel',
      location: 'Chandler, AZ',
      description: 'Cambria Hotel Chandler was a ground up, new build. It consisted of 5 floors of guestroom Luxury vinyl planks, with a carpet tile inset in each of the bedrooms. At every elevator landing, there were 12×24″ porcelain tiles wrapping a carpet inset with schluter metal. At 1st floor, there were hand crafted tiles on walls, stone on columns, multi sized large format tiles at main lobby and tile in restrooms.',
      image: '/Project-Gallery/cambria-hotel.jpg'
    },
  ];

  const selectedProject = selectedImage !== null ? projects[selectedImage] : null;

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < projects.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">OUR WORK</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            Project Gallery
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed commercial and residential flooring projects. Each installation showcases our commitment to quality craftsmanship and attention to detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={`${project.title} - Commercial flooring project in ${project.location} by ABS Floor Covering`}
                  loading="lazy"
                  width="400"
                  height="400"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{project.title}</h3>
                <p className="text-blue-900 font-semibold mb-4">{project.location}</p>
                <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">{project.description}</p>
                <button className="mt-4 text-blue-900 font-semibold hover:underline text-sm">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl w-full max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {selectedImage > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {selectedImage < projects.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Image */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto"
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-contain"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                  <p className="text-blue-900 font-semibold mb-4">{selectedProject.location}</p>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
    </section>
    </>
  );
};

export default ProjectGallery;

