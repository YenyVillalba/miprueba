import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Perfil from "./Components/Perfil";
import Empleos from "./Components/Empleos";
import Cursos from "./Components/Cursos";
import ConsultarAplicaciones from "./Components/ConsultarAplicaciones";
import Empresas from "./Components/Empresas";
import Login from "./Components/Login";
import { NotificacionesProvider } from "./Components/NotificacionesContext";
import HackatonesNacionales from "./Components/Eventos";
import Registrarse from "./Components/Registrarse";



function App() {
  const location = useLocation();
  return (
    
    <NotificacionesProvider>
      <div>
      {location.pathname !== '/Login' && location.pathname !== '/Registrarse' && <Menu />} {/* Menú de navegación que puede incluir enlaces */}  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Empleos" element={<Empleos />} />
          <Route path="/Cursos" element={<Cursos />} />
          <Route path="/ConsultarAplicaciones" element={<ConsultarAplicaciones />} />
          <Route path="/Empresas" element={<Empresas />} />
          <Route path="/Eventos" element={<HackatonesNacionales />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registrarse" element={<Registrarse />} />

        </Routes>
      </div>
    </NotificacionesProvider>
  );
}

export default App;