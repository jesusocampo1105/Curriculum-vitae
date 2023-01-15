//Import styles
import { Route, Routes } from 'react-router-dom';
import './App.css';
//Import components
import Header from './components/Header';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Portafolio from './components/Portafolio';
import Contacto from './components/Contacto';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='inicio' element={<Inicio/>}/>
      <Route path='sobremi' element={<SobreMi/>}/>
      <Route path='portafolio' element={<Portafolio/>}/>
      <Route path='contacto' element={<Contacto/>}/>
      <Route path='*' element={<Inicio/>}/>
    </Routes>
    </>
  );
}

export default App;
