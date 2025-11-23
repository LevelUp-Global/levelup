import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';

import Home from './routes/Home'; 
import Carreira from './routes/Carreira';
import FAQ from './routes/FAQ';
import Sobre from './routes/Sobre';
import Planos from './routes/Planos';
import Auth from './routes/Auth';
import ErrorPage from './routes/Error';
import Integrantes from './routes/Integrantes';
import AntropologoPage from './routes/Curso-antropologo';
import AuditorPage from './routes/Curso-auditor';


function App() {
  return (
    <BrowserRouter>
      <div 
        className="
          flex flex-col min-h-screen
          bg-cover bg-center bg-no-repeat bg-fixed
          text-[var(--cor-texto-principal)]
        "
      >
        <Header />

        <div className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carreira" element={<Carreira />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/cursos/antropologo-digital" element={<AntropologoPage />} />
            <Route path="/cursos/auditor-ia" element={<AuditorPage />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;