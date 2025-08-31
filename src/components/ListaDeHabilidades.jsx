import React from 'react';

const ListaDeHabilidades = ({ habilidades }) => {
  return (
    <div style={{
      margin: '20px auto',
      maxWidth: '300px',
      textAlign: 'left'
    }}>
      <h3>Habilidades Técnicas</h3>
      
      {/* Operador ternario: si el array está vacío muestra mensaje, sino muestra la lista */}
      {habilidades.length === 0 ? (
        <p style={{ color: 'gray', fontStyle: 'italic' }}>
          No hay habilidades para mostrar
        </p>
      ) : (
        <ul>
          {habilidades.map((habilidad, index) => (
            <li key={index}>
              {habilidad}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaDeHabilidades;