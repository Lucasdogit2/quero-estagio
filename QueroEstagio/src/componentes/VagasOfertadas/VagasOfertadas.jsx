import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VagasOfertadas.css';

export default function VagasOfertadas() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  const handleSimulacao = (acao) => {
    alert(`${acao}... (simulação)`);
  };

  return (
    <div className="login-wrapper vagas-ofertadas-root">
      {/* Topbar */}
      <header className="topbar" role="banner">
        <div className="brand">
          <div className="logo-square" aria-hidden="true">Q.E</div>
          <div>
            <div style={{ fontSize: '0.95rem' }}>Q.E. – Quero Estágio</div>
            <div>Instituto Federal do Amapá — Campus Laranjal do Jari</div>
          </div>
        </div>
        <div>
          <button 
            className="menu-btn" 
            onClick={() => setMenuAberto(!menuAberto)} 
            aria-expanded={menuAberto}
          >
            ☰ Menu
          </button>
        </div>
      </header>

      {/* Menu lateral condicional */}
      {menuAberto && (
        <nav className="menu-panel" style={{ display: 'block', position: 'absolute' }}>
          <a href="#" onClick={() => { setMenuAberto(false); navigate('/painel-ofertante'); }}>Painel</a>
          <a href="#" onClick={() => { setMenuAberto(false); navigate('/ofertar-vaga'); }}>Cadastrar Estágio</a>
          <a href="#" onClick={() => navigate('/ofertante')} style={{ color: '#FF7F50', fontWeight: 'bold' }}>Sair</a>
        </nav>
      )}

      {/* Conteúdo Principal */}
      <main className="container">
        <div className="cards-container">
          
          {/* Card 1 */}
          <div className="stage-card">
            <div className="stage-details">
              <div className="stage-title">Estágio em Laboratório Avançado</div>
              <div className="stage-info"><span>Tipo:</span> Interno</div>
              <div className="stage-info"><span>Vagas:</span> 6</div>
              <div className="stage-info"><span>Início:</span> 01/10/2025</div>
              <div className="stage-info"><span>Término:</span> 20/12/2025</div>
            </div>
            <div className="actions-holder">
              <button className="btn-access" onClick={() => handleSimulacao('Acessando o estágio')}>Acessar Estágio</button>
              <button className="btn-access" onClick={() => handleSimulacao('Abrindo pedidos')}>Ver Pedidos</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="stage-card">
            <div className="stage-details">
              <div className="stage-title">Estágio em Escritório Administrativo</div>
              <div className="stage-info"><span>Tipo:</span> Externo</div>
              <div className="stage-info"><span>Vagas:</span> 4</div>
              <div className="stage-info"><span>Início:</span> 10/10/2025</div>
              <div className="stage-info"><span>Término:</span> 15/12/2025</div>
            </div>
            <div className="actions-holder">
              <button className="btn-access" onClick={() => handleSimulacao('Acessando o estágio')}>Acessar Estágio</button>
              <button className="btn-access" onClick={() => handleSimulacao('Abrindo pedidos')}>Ver Pedidos</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="stage-card">
            <div className="stage-details">
              <div className="stage-title">Estágio em Informática Aplicada</div>
              <div className="stage-info"><span>Tipo:</span> Interno</div>
              <div className="stage-info"><span>Vagas:</span> 5</div>
              <div className="stage-info"><span>Início:</span> 05/10/2025</div>
              <div className="stage-info"><span>Término:</span> 20/12/2025</div>
            </div>
            <div className="actions-holder">
              <button className="btn-access" onClick={() => handleSimulacao('Acessando o estágio')}>Acessar Estágio</button>
              <button className="btn-access" onClick={() => handleSimulacao('Abrindo pedidos')}>Ver Pedidos</button>
            </div>
          </div>

        </div>
      </main>

      {/* Rodapé */}
      <footer className="bottombar">
        Plataforma Q.E. – Quero Estágio | Vinculada ao Instituto Federal do Amapá – Campus Laranjal do Jari
        <small>©️ 2025 – Todos os direitos reservados</small>
      </footer>
    </div>
  );
}