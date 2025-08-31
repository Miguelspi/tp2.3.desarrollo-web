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

  const [mostrarTarjeta, setMostrarTarjeta] = useState(true);  

  const [mostrarLista, setMostrarLista] = useState(true);
  
  const toggleMostrarTarjeta = () => {
    setMostrarTarjeta(!mostrarTarjeta);
  };
  
  const toggleMostrarLista = () => {
    setMostrarLista(!mostrarLista);
  };

  return (
    <div className="App">
      <Titulo />
            
      <button onClick={toggleMostrarTarjeta} style={{margin: '5px', padding: '10px'}}>
        {mostrarTarjeta ? 'Ocultar Tarjeta' : 'Mostrar Tarjeta'}
      </button>
    
      <button onClick={toggleMostrarLista} style={{margin: '5px', padding: '10px'}}>
        {mostrarLista ? 'Ocultar Lista' : 'Mostrar Lista'}
      </button>
      
      {mostrarTarjeta && <TarjetaDePerfil usuario={usuario} />}
      
      {mostrarLista && <ListaDeHabilidades habilidades={habilidades} />}
    </div>
  );
}

export default App;