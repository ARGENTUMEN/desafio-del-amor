import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardPage from './components/CardPage';

function App() {
    return (
        <Router>
            <Routes>
                {/* Ruta dinámica */}
                <Route path="/dia/:day" element={<CardPage />} />
                {/* Ruta de bienvenida (opcional) */}
                <Route path="/" element={<p>Bienvenido a El Desafío del Amor</p>} />
            </Routes>
        </Router>
    );
}

export default App;
