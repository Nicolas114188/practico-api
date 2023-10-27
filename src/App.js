import './App.css';
import ClimaHoy from './Componentes/ClimaHoy';
import TransporteBondi from './Componentes/TransporteBondi';

function App() {
  return (
    <div className="App">
          {/*<div className='clima'>
            <h2>Clima</h2>
          <ClimaHoy/>
          </div>*/}
          <div className='Bondi'>
          <h2>Transporte de colectivo</h2>
            <TransporteBondi/>
          </div>
        
    </div>
  );
}

export default App;
