import React from "react";
import styles from "../Styles/HeroSection.module.css";
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Empoderando a las Mujeres e Innovando el Mundo de la Tecnología</h1>
        <p>Bienestar, Equilibrio y Desarrollo Profesional</p>
        <Link to="/Empleos">
          <button className={styles.button}>Explorar Empleos</button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;