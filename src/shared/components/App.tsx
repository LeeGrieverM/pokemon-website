import React from 'react';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import HomePage from '../../pages/HomePage/HomePage';
import PokemonPage from '../../pages/PokemonPage/PokemonPage';
import {paths} from '../data/constants';

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
        </Routes>
    </Router>
    </div>
)

}

export default App;
