// src/pages/Education.jsx
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white scroll-mt-32">
      <div className="container mx-auto text-center px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-white mb-8" data-aos="fade-up">
          Education
        </h2>

        {/* Slider */}
        <div className="mt-8 max-w-3xl mx-auto" data-aos="fade-up">
          <Slider {...settings}>
            {/* B.Tech */}
            <div>
              <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">National Institute of Technology, Agartala</h3>
                <p className="mt-2 text-gray-600">Bachelor of Technology - Electrical Engineering</p>
                <p className="text-gray-600 mt-1">CGPA: 8.32</p>
                <p className="mt-4 text-gray-800 font-medium">2021 - 2025</p>
              </div>
            </div>

            {/* 12th */}
            <div>
              <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">R.R.M.Y. Inter College, Sitamarhi</h3>
                <p className="mt-2 text-gray-600">Intermediate - Bihar School Examination Board</p>
                <p className="text-gray-600 mt-1">Percentage: 80.4%</p>
                <p className="mt-4 text-gray-800 font-medium">2017 - 2019</p>
              </div>
            </div>

            {/* 10th */}
            <div>
              <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">MVG High School, Manikchouk</h3>
                <p className="mt-2 text-gray-600">Matriculation - Bihar School Examination Board</p>
                <p className="text-gray-600 mt-1">Percentage: 71%</p>
                <p className="mt-4 text-gray-800 font-medium">2016 - 2017</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Education;
