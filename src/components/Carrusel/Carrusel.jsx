// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css'; // Importa los estilos del módulo

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <Slider {...settings} className={styles.carousel}>
      {images.map((image, index) => (
        <div key={index} className={styles.carouselItem}>
          <img src={image} alt={`slide-${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
