import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo'; 
import TarjetaDePerfil from './components/TarjetaDePerfil';
import { useState } from 'react';
import ListaDeHabilidades from './components/ListaDeHabilidades';

function App() {
  const usuario = {
    nombre: "Miguel Angel Espindola",
    profesion: "Desarrollador Web",
    edad: 38
  };

  const habilidades = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js'];

  const [mostrarLista, setMostrarLista] = useState(true);

  const toggleMostrarLista = () => {
    setMostrarLista(!mostrarLista);
  };

  return (
    <div className="App">
      <Titulo />
      {mostrarLista && <TarjetaDePerfil usuario={usuario} />}
      <button onClick={toggleMostrarLista}>
      {mostrarLista ? 'Ocultar Tarjeta' : 'Mostrar Tarjeta'}
      </button>
      <ListaDeHabilidades habilidades={habilidades} />
    </div>
  );
}

export default App;