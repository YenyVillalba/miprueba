import React, { useState, useRef } from 'react';
import Slider from "react-slick"; 
import styles from '../Styles/Cursos.module.css'; 
import cursoc from '../Assets/curso-C++.jpg';
import cursoJavaScrip from '../Assets/Curs-JS.jpg';
import pythonCurso from '../Assets/PYTON-CURSO.jpg';
import sqlCurso from '../Assets/SQL-SERVER-curso.jpg';
import sqlCursoBasico from '../Assets/curso-basico-sql.jpg';
import cursAngular from '../Assets/CursoAngular.jpg';
import cursonodeJS from '../Assets/cursoNodeJS.jpg';
import cursoGitHub from '../Assets/CursoGibHub.jpg';

const Cursos = () => {
  const [keyword, setKeyword] = useState(''); 
  const sliderRef = useRef(null);

  const allCourses = [
    { title: 'Curso de C++', image: cursoc, url: 'https://www.youtube.com/watch?app=desktop&v=jS6wb263CIM' },
    { title: 'Curso de JavaScript', image: cursoJavaScrip, url: 'https://www.youtube.com/watch?app=desktop&v=r7R2khOB3n8'},
    { title: 'Curso de Python', image: pythonCurso, url: 'https://www.youtube.com/watch?app=desktop&v=czNjtWFsNRc' },
    { title: 'Curso de SQL Server', image: sqlCurso, url: 'https://www.youtube.com/watch?app=desktop&v=Zvz9fsNJd7s' },
    { title: 'Curso de SQL Server Basico', image: sqlCursoBasico, url: 'https://www.youtube.com/watch?v=j4VeiHGZVMA&list=PL6_-QWg-BIvG6fnexI0qFjOXAYK3ruVfr&index=1' },
    { title: 'Curso de Node Advance', image: cursonodeJS, url: 'https://www.youtube.com/watch?v=dGcsHMXbSOA' },
    { title: 'Curso de Angular', image: cursAngular, url: 'https://www.youtube.com/watch?v=7RziWeAUcss' },
    { title: 'Curso de Node.js', image: cursonodeJS, url: 'https://www.youtube.com/watch?app=desktop&v=i3OdKwuBjeM' },
    { title: 'Curso de Git y GitHub', image: cursoGitHub, url: 'https://www.youtube.com/watch?v=mCVQgSyjCkI&list=PLQxX2eiEaqby-qh4raiKfYyb4T7WyHsfW' },
  ];

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
  };

  const filteredCourses = keyword 
    ? allCourses.filter(course =>
        course.title.toLowerCase().includes(keyword.toLowerCase())
      )
    : allCourses;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <h2>Femploy: Cursos Ofertados</h2>
        <p className={styles.headerParrafo}>Explora nuestra selección de cursos gratuitos en desarrollo web, programación y tecnologías modernas. ¡Empieza a aprender hoy!</p>
              
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Palabra clave"
          value={keyword}
          onChange={handleKeywordChange}
          id="filtro"
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      <div className={styles.courseList}>
  {filteredCourses.length > 0 && (
    <div className={styles.resultsHeader}>
      <h3>Explora nuestros cursos:</h3>
    </div>
  )}

  {filteredCourses.length === 1 ? (
   
    <div className={styles.courseCard}>
      <a
        href={filteredCourses[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.courseLink}
      >
        <img
          src={filteredCourses[0].image}
          alt={filteredCourses[0].title}
          className={styles.courseImage}
        />
        <h4>{filteredCourses[0].title}</h4>
      </a>
      <button onClick={() => window.open(filteredCourses[0].url, "_blank")}>
        Hacer Curso
      </button>
    </div>
  ) : (
    
    <Slider ref={sliderRef} {...settings}>
      {filteredCourses.map((course, index) => (
        <div key={index} className={styles.courseCard}>
          <a
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.courseLink}
          >
            <img
              src={course.image}
              alt={course.title}
              className={styles.courseImage}
            />
            <h4>{course.title}</h4>
          </a>
          <button onClick={() => window.open(course.url, "_blank")}>
            Hacer Curso
          </button>
        </div>
      ))}
    </Slider>
  )}
</div>
<footer className={styles.footer}>
  <div className={styles.footerContent}>
    <div className={styles.footerSection}>
      <h4>Sobre Femploy</h4>
      <p>
        Una plataforma creada para impulsar la empleabilidad de mujeres en tecnología. Accede a cursos, oportunidades y más.
      </p>
    </div>
    <div className={styles.footerSection}>
      <h4>Enlaces Útiles</h4>
      <ul>
        <li><a href="/about">Sobre Nosotros</a></li>
        <li><a href="/contact">Contacto</a></li>
        <li><a href="/terms">Términos de Servicio</a></li>
        <li><a href="/privacy">Política de Privacidad</a></li>
      </ul>
    </div>
    
  </div>
  <div className={styles.footerBottom}>
    <p className= {styles.footerParrafo}>&copy; 2024 Femploy. Todos los derechos reservados.</p>
  </div>
</footer>


    </div>
  );
};

export default Cursos;