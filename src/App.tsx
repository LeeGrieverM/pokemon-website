import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import InternalPage from './pages/InternalPage/InternalPage';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
            <Route
                path="/"
                element={
                    <HomePage
                    />
                }
            />
            <Route
                path="/pokemon/:pokemonId"
                element={
                    <InternalPage />
                }
            />
        </Routes>
    </Router>
    </div>
)

}

export default App;
