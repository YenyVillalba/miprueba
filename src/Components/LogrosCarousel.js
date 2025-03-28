import React from "react";
import Slider from "react-slick";
import styles from "../Styles/LogrosCarousel.module.css";
import logro1 from "../Assets/logro1.jpg";
import logro2 from "../Assets/logro2.jpg";
import curso1 from "../Assets/curso1.jpg";

function LogrosCarousel() {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
  };

  return (
    <div className={styles.carousel}>
      <h2>Logros Destacados y Cursos Disponibles</h2>
      <Slider {...settings}>
        <div>
          <img src={logro1} alt="Logro 1" />
        </div>
        <div>
          <img src={logro2} alt="Logro 2" />
        </div>
        <div>
          <img src={curso1} alt="Curso 1" />
        </div>
      </Slider>
    </div>
  );
}

export default LogrosCarousel;