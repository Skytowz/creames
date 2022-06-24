import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil/Accueil';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Accueil/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
