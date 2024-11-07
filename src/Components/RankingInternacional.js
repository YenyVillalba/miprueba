import React, { useState } from 'react';
import styles from "../Styles/RankingInternacional.module.css";

const RankingInternacional = () => {
  // Datos estáticos
  const dato = [
    { id: 1, name: 'Mark', puntaje: 600, handle: '@mdo', country: 'Panama' },
    { id: 2, name: 'Jacob', puntaje: 598, handle: '@fat', country: 'Colombia' },
    { id: 3, name: 'Larry', puntaje: 590, handle: '@twitter', country: 'Peru' },
    { id: 4, name: 'Marta Ines Giraldo', puntaje: 500, handle: '@martGirl', country: 'Israel' },
    { id: 5, name: 'Marilyn Paulina Restrepo Selgado', puntaje: 499, handle: '@MaryRes', country: 'US' },
    { id: 6, name: 'Kyale Hoyos Sanchez', puntaje: 455, handle: '@Kyarasanc', country: 'Colombia' },
    { id: 7, name: 'Estefany Sanchez Amaya', puntaje: 445, handle: '@Estefe', country: 'China' },
    { id: 8, name: 'Maria Dolly Rojas', puntaje: 435, handle: '@MariaDoll', country: 'Panamá' },
    { id: 9, name: 'Yulissa Restrepo Correa', puntaje: 420, handle: '@YulissaRes', country: 'USA' },
    { id: 10, name: 'Karen Valoyes Silgado', puntaje: 390, handle: '@Karenvaloy', country: 'Israel' },
    { id: 11, name: 'Lucia Naduska Reyna', puntaje: 350, handle: '@lucna', country: 'Panamá' },
    { id: 12, name: 'Maria esther Rivera Montolla', puntaje: 301, handle: '@Rivmaes', country: 'Canada' },
    { id: 13, name: 'Luz Estela Diaz', puntaje: 300, handle: '@Luzdiaz', country: 'Ecuador' }
  ];

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra los datos basados en el nombre
  const filteredData = dato.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
        <div className={styles.tablacon}>
          <h1 className={styles.titulo}>Ranking Internacional</h1>
      <div className={styles.barraBusqueda}>
        <input
          type="text"
          placeholder="Buscar en la tabla"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className={styles.inputBusqueda}
        />
        </div>    
      </div>

      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            <th className={styles.th}>#</th>
            <th className={styles.th}>Nombre</th>
            <th className={styles.th}>Puntuación</th>
            <th className={styles.th}>Usuario</th>
            <th className={styles.th}>Pais</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderiza los datos filtrados en la tabla */}
          {filteredData.map((item) => (
            <tr key={item.id} className={styles.row}>
              <td className={styles.td}>{item.id}</td>
              <td className={styles.td}>{item.name}</td>
              <td className={styles.td}>{item.puntaje}</td>
              <td className={styles.td}>{item.handle}</td>
              <td className={styles.td}>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <footer className={styles.footer}>
            <p>Femploy - Empoderando Mujeres en el Trabajo</p>
        </footer>
    </div>
  );
}

export default RankingInternacional;