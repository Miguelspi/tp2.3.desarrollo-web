import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo'; 
import TarjetaDePerfil from './components/TarjetaDePerfil';


function App() {
  const usuario = {
    nombre: "Miguel Angel Espindola",
    profesion: "Desarrollador Web",
    edad: 38
  };
  return (
    <div className="App">
      
      <Titulo />
      <TarjetaDePerfil usuario={usuario} />


    </div>
  );
}

export default App;
