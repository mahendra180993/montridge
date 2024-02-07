import React from "react";
import img1 from '../img/img1.jpeg'
import { useState, useEffect } from "react";

const Home = () => {
  const images = [
    '/img/pic1.png',
    '/img/pic2.jpeg',
    '/img/pic3.png',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]); 
  return(
    <>
      <div>
        <div className="bg-white py-12">
          <div className="container mx-auto relative">
            <img src={images[currentImageIndex]} alt="Carousel" className="w-full h-auto rounded-lg shadow-lg" />
              {/* Previous button */}
              <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded-full">
                Prev
              </button>
              {/* Next button */}
              <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded-full">
                Next
              </button>
          </div>
        </div>

      {/* Second Fold - Grid with Image and Text */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Our School</h2>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            </p>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            </p>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            </p>
          </div>
          <div className="lg:order-last">
            <img src={img1} alt="ex" className="rounded-lg shadow-lg h-72 w-full" />
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            </p>
          </div>
          </div>
        </div>
      <div className="bg-gray-300 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">School Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tortor quis ex convallis volutpat.
          </p>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;