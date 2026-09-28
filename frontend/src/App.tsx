import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Header';
import NotFound from "./pages/NotFound";
import './App.css';

const App: React.FC = () => {
  return (
    // Aseguramos que la raíz ocupe todo el ancho sin márgenes
    <div className="w-full min-h-screen m-0 p-0 overflow-x-hidden flex flex-col bg-[#111111]">
      <Header />
      
      {/* 
        ¡AQUÍ ESTABA EL PROBLEMA! 
        Eliminamos className="container". Esa clase en Tailwind/CSS limita el ancho de la página.
        Ahora le decimos que ocupe todo el ancho disponible (w-full).
      */}
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
 
          {/* RUTAS DE ADMINISTRADOR */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>


    </div>
  );
};

export default App;