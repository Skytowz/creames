import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil/Accueil';
import CreerJeu from './pages/CreerJeu/CreerJeu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/jouer' element={<p>coucou</p>}/>
          <Route path='/creer-jeu' element={<CreerJeu/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
