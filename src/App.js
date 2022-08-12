import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil/Accueil';
import AjouterInfos from './pages/CreerJeu/AjouterInfos';
import CreerJeu from './pages/CreerJeu/CreerJeu';
import MepJeu from './pages/CreerJeu/MepJeu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/jouer' element={<p>coucou</p>}/>
          <Route path='/creer-jeu'>
            <Route path="info-jeu" element={<AjouterInfos/>}/>
            <Route path="mep-jeu" element={<MepJeu/>}/>
            <Route path="" element={<CreerJeu/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
