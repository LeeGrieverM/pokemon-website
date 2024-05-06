import React from 'react';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import {paths} from './shared/data/constants';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
            <Route
                path={`${paths.root}`}
                element={
                    <HomePage
                    />
                }
            />
            <Route
                path={`${paths.pokemon}`}
                element={
                    <PokemonPage />
                }
            />
            <Route
                path={`${paths.favorites}`}
                element={
                    <FavoritesPage />
                }
            />
        </Routes>
    </Router>
    </div>
)

}

export default App;
