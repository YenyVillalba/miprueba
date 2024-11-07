import React from 'react';
import img1 from "../Assets/img1.png";
import styles from "../Styles/Login.module.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';



const Login = () => {
  return (
    <div>
        <div className={styles.login}>
          <img src={img1}  alt='fondo' className={styles.ImgFondo}/>
           <form className={styles.loginForm}> 
              <h1 className={styles.title} > Inicio de Sesión</h1>
           <div className={styles.loginFields}>
                <div className={styles.loginBox}>
                  <input type='email' placeholder=' Ingresa tu Email' required className={styles.loginInput}/>
                  <i><MdEmail />  </i>
                </div>
                <div className={styles.loginBox}>
                  <input type='password' placeholder=' Ingresa tu Contraseña' required className={styles.loginInput}/>
                  <i><RiLockPasswordFill /></i>
                </div>
                <div className={styles.check}>
                  <input type='checkbox' className={styles.checkInput} id='user-check'/>
                  <label htmlFor="usercheck" className={styles.checkLabel}> Recordar Contraseña</label>
                   <p className={styles.forgot} >Olvidastes la Contraseña</p>
                </div>
               
           </div>
           <div className={styles.buttonForm}><Link to="/" >Iniciar Sesión </Link></div>
           <div className={styles.Separator}>
                <br></br>
            <div className={styles.signIn}>
              <button className={styles.google}>
                <i  className={styles.pGoogle} ><FcGoogle /> Iniciar Sesión con google</i>  
               </button>
               <div className={styles.Register}>
                  <p>Registrarse</p>
               </div>
            </div>
           </div>
           </form>
        </div>
    </div>
  )
}

export default Login;