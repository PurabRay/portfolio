import { useState } from 'react';
import { Carousel } from 'nuka-carousel';
import "./banner.css";

const banners = [
  "https://dev-portfolio-template.netlify.app/static/media/one.a3146128.svg",
  "https://dev-portfolio-template.netlify.app/static/media/two.721a0672.svg",
  "https://dev-portfolio-template.netlify.app/static/media/three.d4f751d1.svg"
];

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? banners.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === banners.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="banner">
      <div className="carousel-container">
        <Carousel
          autoplay
          wrapAround
          slideIndex={currentSlide}
          className="h-banner"
        >
          {banners.map((bannerSrc, index) => (
            <img key={index} src={bannerSrc} alt={`banner-${index}`} className="carousel-image" />
          ))}
        </Carousel>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrevSlide} className="carousel-control">Prev</button>
        <button onClick={handleNextSlide} className="carousel-control">Next</button>
      </div>
    </div>
  );
}

export default Banner;