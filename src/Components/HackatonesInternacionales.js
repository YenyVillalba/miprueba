import React from "react";
import styles from "../Styles/HackatonesNacionales.module.css";
import img4 from '../Assets/img4.png';
import img5 from "../Assets/img5.png";
import img6 from "../Assets/img6.png";
import img7 from "../Assets/img7.png";

function HackatonesNacionales(){
return(
  <div className={styles.contAiner}>
        <div className={styles.ContImg4}> 
            <img src={img4} alt="imagen4" className={styles.img4}/>
        </div>
        <div className={styles.tablacon}>
            <h1 className={styles.tittulo}>Hackathon Internacional Femenina: ¡Únete a la Revolución de la Programación!</h1>
        </div>
        <div className={styles.containerCard}>
             <div className={styles.ProfileCard}>
                <h2 className={styles.ProfileName}> Ciberseguridad</h2>
                <img className={styles.ProfileImg} src={img5} alt="card"/>
                <p className={styles.ProfileDescription}> Estados Unidos, 15 de enero de 2025. <br/> <br/> 
                Se explorarán desafíos como la creación de soluciones innovadoras, optimización de algoritmos y desarrollo de aplicaciones colaborativas.</p>  
                <div className={styles.ProfileButton}> 
                    <button>Inscribirse</button>
                </div><br/> <br/> 
            </div>
            <div className={styles.ProfileCard}>
                <h2 className={styles.ProfileName}>Desarrollo</h2>
                <img className={styles.ProfileImg} src={img7} alt="card"/>
                <p className={styles.ProfileDescription}>Canadá, 25 de enero del 2025. <br/> <br/> 
                Se desafiará a los participantes a resolver problemas complejos, diseñar sistemas escalables y crear soluciones tecnológicas impactantes.</p>        
                <div className={styles.ProfileButton}> 
                    <button>Inscribirse</button>
                </div><br/> <br/> 
                
            </div>
            <div className={styles.ProfileCard}>
                <h2 className={styles.ProfileName}> Innovación</h2>
                <img className={styles.ProfileImg} src={img6} alt="card"/>
                <p className={styles.ProfileDescription}>Reino Unido, 28 de febrero del 2025. <br/> <br/> 
                Los participantes tendrán la oportunidad de trabajar en proyectos de software, mejorar la experiencia de usuario y construir prototipos funcionales en tiempo real.</p>        
                <div className={styles.ProfileButton}> 
                    <button>Inscribirse</button>
                </div><br/> <br/>
            </div>
        </div>
        <footer className={styles.footer}>
            <p>Femploy - Empoderando Mujeres en el Trabajo</p>
        </footer>
  </div>  
);

}
export default HackatonesNacionales;