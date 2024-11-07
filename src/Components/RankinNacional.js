import React, { useState } from 'react';
import styles from "../Styles/RankingNacional.module.css";

const RankingNacional = () => {
  // Datos estáticos
  const dato = [
    { id: 1, name: 'Mark', puntaje: 481, handle: '@mdo', country: "Colombia" },
    { id: 2, name: 'Jacob', puntaje: 450, handle: '@fat', country: "Colombia" },
    { id: 3, name: 'Larry', puntaje: 400, handle: '@twitter', country: "Colombia" },
    { id: 4, name: 'Paula Lopez Silgado', puntaje: 300, handle: '@paullosil', country: "Colombia" },
    { id: 5, name: 'Marta Roldan Rojas', puntaje: 299, handle: '@MartRol', country: "Colombia" },
    { id: 6, name: 'Maria Nelly Rojas', puntaje: 290, handle: '@mariaro', country: "Colombia" },
    { id: 7, name: 'Manuela Zapata Diaz', puntaje: 280, handle: '@Mandiaz', country: "Colombia" },
    { id: 8, name: 'Luisa Rojas De las aguas', puntaje: 270, handle: '@LuisRojas', country: "Colombia" },
    { id: 9, name: 'Narlis Ruiz Blanco', puntaje: 260, handle: '@NarlisBlanco', country: "Colombia" },
    { id: 10, name: 'Kiara reyes Sanchez', puntaje: 259, handle: '@Kiarrey', country: "Colombia" },
    { id: 11, name: 'Kenia Suarez', puntaje: 255, handle: '@KenSUar', country: "Colombia" },
    { id: 12, name: 'Alexandra Hidalgo Ceren', puntaje: 250, handle: '@Rivmaes', country: "Colombia" },
    { id: 13, name: 'Luciana Estefany Villaceleste', puntaje: 220, handle: '@Luci', country: "Colombia" }
  ];

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar datos según el nombre (utilizando el array 'dato' directamente)
  const filteredData = dato.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container_1}>
        <div className={styles.searchContainer}>
      <div>
        <h2 className={styles.titulo}>Ranking Nacional</h2>
      </div>

      <div className={styles.barraBusqueda}>   
        <input
          type="text" // Corrección aquí: 'type="text"'
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
          {/* Mapea 'filteredData' para mostrar solo los datos que coinciden con la búsqueda */}
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
};

export default RankingNacional;