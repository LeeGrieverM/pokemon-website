import React from 'react';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import InternalPage from './pages/InternalPage/InternalPage';
import ToolBar from './shared/components/ToolBar/ToolBar';
import {paths} from './shared/data/constants';

function App() {
  return (
    <div className="App">
    <Router>
        <ToolBar/>
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
                    <InternalPage />
                }
            />
        </Routes>
    </Router>
    </div>
)

}

export default App;
