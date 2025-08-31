import React from 'react'

const TarjetaDePerfil = ({ usuario }) => {
  return (
    <div style={{
      border: '1px solid #0f0d0dff',
      borderRadius: '8px',
      padding: '16px',
      margin: '20px auto',
      maxWidth: '300px',
      textAlign: 'center',
      backgroundColor: '#7a7a7cff'
    }}>
      <h2>{usuario.nombre}</h2>
      <p><strong>Profesión:</strong> {usuario.profesion}</p>
      <p><strong>Edad:</strong> {usuario.edad}</p>
    </div>
  );
};

export default TarjetaDePerfil;