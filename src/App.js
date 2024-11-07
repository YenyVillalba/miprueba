// src/App.js
import React from 'react';
import Message from './Message';
import cursoc from './Assets/curso-C++.jpg';

function App() {
  return (
    <div>
      <h1>Bienvenido a mi Proyecto React yeny</h1>
      <img src={cursoc} alt="Descripción de la imagen" />
      <Message />
    </div>
  );
}

export default App;
