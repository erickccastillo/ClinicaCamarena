import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Header';
import NotFound from "./pages/NotFound";
import './App.css'; // Asegúrate de que este archivo (o index.css) contenga el @theme de Tailwind que configuramos

const App: React.FC = () => {
  return (
    // Reemplazamos bg-[#111111] por bg-background y agregamos text-on-surface para el color base de la letra
    <div className="w-full min-h-screen m-0 p-0 overflow-x-hidden flex flex-col bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header />
      
      {/* 
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