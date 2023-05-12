import './assets/css/main.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import logo from './assets/img/logo.svg';
import StarsBackground from './components/starsBackground';
import TitleH1 from './components/titleH1';
import Loading from './components/loading';


// Routes
const CharacterList = lazy(() => import('./pages/characterList/CharacterList'));
const Character = lazy(() => import('./pages/characters/Character'));

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <StarsBackground/>
        <main className="main">
          <img src={logo} className="logo fade-in" alt="logo" />
          <TitleH1 title="Episodio I - La Api"/>
          <Suspense fallback={<Loading/>}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<CharacterList />} />
                <Route path="/:page" element={<Character />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </main>
      </div>
    </React.StrictMode>
  );
}
 
export default App;

