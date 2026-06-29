import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './componentes/Login/Login';
import LoginOfertante from './componentes/LoginOfertante/LoginOfertante';
import Painel from './componentes/Painel/Painel';
import PainelOfertante from './componentes/PainelOfertante/PainelOfertante';
import OfertarVaga from './componentes/OfertarVaga/OfertarVaga';
import VagasOfertadas from './componentes/VagasOfertadas/VagasOfertadas'; // Import do componente novo
import BuscarEstagios from './componentes/BuscarEstagios/BuscarEstagios';
import DetalhesEstagio from './componentes/DetalhesEstagio/DetalhesEstagio';
import MeusEstagios from './componentes/MeusEstagios/MeusEstagios';
import MeuEstagioAtivo from './componentes/MeuEstagioAtivo/MeuEstagioAtivo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ofertante" element={<LoginOfertante />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/painel-ofertante" element={<PainelOfertante />} />
        <Route path="/ofertar-vaga" element={<OfertarVaga />} />
        <Route path="/vagas-ofertadas" element={<VagasOfertadas />} /> {/* Nova Rota */}
        <Route path="/buscar" element={<BuscarEstagios />} />
        <Route path="/detalhes" element={<DetalhesEstagio />} />
        <Route path="/meus-estagios" element={<MeusEstagios />} />
        <Route path="/meu-estagio-ativo" element={<MeuEstagioAtivo />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;