import React from 'react';
import { useNotificaciones } from './NotificacionesContext';
import styles from "../Styles/Notificaciones.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Notificaciones = () => {
  const { isOpen, cerrarNotificacion } = useNotificaciones(); // Obtenemos el estado y la función desde el contexto

  if (!isOpen) return null;

  return (
    <div className={styles.notificaciones}>
      <div className={styles.notificacionesHeader}>
        <h2>Notificaciones</h2>
        <button onClick={cerrarNotificacion} className={styles.toggleButton}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.notificacionesBody}>
        <div className={styles.notificacionBlock}>
          <h2>Nuevas Ofertas</h2>
          <p>Revisa las nuevas ofertas para ti</p>
        </div>
        <div className={styles.notificacionBlock}>
          <h2>Notificaciones</h2>
          <p>No hay notificaciones pendientes</p>
        </div>
      </div>
    </div>
  );
};

export default Notificaciones;
