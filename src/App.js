import logo from './logo.svg';
import './App.css';
import { Primercomponente } from './Componentes/Primercomponente';
import { Segundocomponente } from './Componentes/Segundocomponente';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       <Primercomponente />
       <hr/>
       
       <Segundocomponente />
      </header>
    </div>
  );
}

export default App;