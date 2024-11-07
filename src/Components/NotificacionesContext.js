import React, { createContext, useState, useContext } from 'react';

const NotificacionesContext = createContext();

// Crear un proveedor que envolverá toda la aplicación
export const NotificacionesProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const abrirNotificacion = () => {
    setIsOpen(true);
  };

  const cerrarNotificacion = () => {
    setIsOpen(false);
  };

  return (
    <NotificacionesContext.Provider value={{ isOpen, abrirNotificacion, cerrarNotificacion }}>
      {children}
    </NotificacionesContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useNotificaciones = () => useContext(NotificacionesContext);
