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
            <h1 className={styles.tittulo}>Hackathon Nacional Femenina: ¡Únete a la Revolución de la Programación!</h1>
        </div>
        <div className={styles.containerCard}>
             <div className={styles.ProfileCard}>
                <h2 className={styles.ProfileName}> Ciberseguridad</h2>
                <img className={styles.ProfileImg} src={img5} alt="card"/>
                <p className={styles.ProfileDescription}> Colombia, 20 de diciembre de 2024. <br/> <br/> 
                Se abordara temas como Detección y prevención de amenazas, Análisis de vulnerabilidades y 
                Respuesta a incidentes.</p>  
                <div className={styles.ProfileButton}> 
                    <button>Inscribirse</button>
                </div><br/> <br/> 
            </div>
            <div className={styles.ProfileCard}>
                <h2 className={styles.ProfileName}>Diseño Web</h2>
                <img className={styles.ProfileImg} src={img7} alt="card"/>
                <p className={styles.ProfileDescription}>Colombia, 25 de enero del 2025. <br/> <br/> 
                Se abordara temas como Interfaces de usuario intuitivas, Experiencia de usuario, Diseño responsivo y Accesibilidad</p>        
                <div className={styles.ProfileButton}> 
                    <button>Inscribirse</button>
                </div><br/> <br/> 
                
            </div>
            <div className={styles.ProfileCard}>
                <h2 className={styles.ProfileName}> IA</h2>
                <img className={styles.ProfileImg} src={img6} alt="card"/>
                <p className={styles.ProfileDescription}>Colombia, 28 de febrero del 2025. <br/> <br/> 
                Se abordara temas como Aprendizaje automático, Procesamiento del lenguaje natural,Visión por computadora y Robótica</p>        
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