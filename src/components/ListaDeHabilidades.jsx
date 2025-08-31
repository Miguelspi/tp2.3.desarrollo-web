import React from 'react'

const ListaDeHabilidades = ({ habilidades }) => {
  return (
    <div style={{
      margin: '20px auto',
      maxWidth: '300px',
      textAlign: 'left'
    }}>
      <h3>Habilidades Técnicas</h3>
      <ul>
        {habilidades.map((habilidad, index) => (
          <li key={index}>
            {habilidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeHabilidades;