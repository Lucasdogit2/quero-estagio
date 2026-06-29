import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Painel.css';

export default function Painel() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  // Função para navegar até a página de busca de estágios
  const handleBuscarEstagios = () => {
    navigate('/buscar');
  };

  // Altere essa função dentro do seu Painel.jsx
  const handleMeusEstagios = () => {
    navigate('/meus-estagios'); // Agora ela redireciona para a tabela de status!
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="painel-body">
      <header>
        <div className="brand" style={{ cursor: 'pointer' }} onClick={() => navigate('/painel')}>
          <div className="logo-square">Q.E</div>
          <div>
            <div>Q.E. – Quero Estágio</div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.9)' }}>
              Instituto Federal do Amapá — Campus Laranjal do Jari
            </div>
          </div>
        </div>
        <button 
          className="menu-btn" 
          onClick={() => setMenuAberto(!menuAberto)}
          aria-expanded={menuAberto}
        >
          ☰ Menu
        </button>
      </header>

      {menuAberto && (
        <nav className="menu-panel">
          <a href="#" onClick={() => { setMenuAberto(false); handleBuscarEstagios(); }}>Buscar Estágios</a>
          <a href="#" onClick={() => { setMenuAberto(false); handleMeusEstagios(); }}>Meus Estágios</a>
          <a href="#" onClick={handleLogout}>Sair</a>
        </nav>
      )}

      {/* VERSÃO 1 - FORMAL */}
      <section className="version1" id="v1">
        <h2>Bem-vindo ao Painel do Estudante – Versão Formal</h2>
        <div className="cards">
          <div className="card" onClick={handleBuscarEstagios}>
            <i>🔍</i>
            <h3>Buscar Estágios</h3>
          </div>
          <div className="card" onClick={handleMeusEstagios}>
            <i>📁</i>
            <h3>Meus Estágios</h3>
          </div>
        </div>
        <div className="about">
          <h2>Quem Somos</h2>
          <p>
            Somos a plataforma Q.E., dedicada a conectar estudantes a oportunidades de estágio de maneira eficiente, segura e transparente. Nossa missão é facilitar o caminho do estudante ao mercado de trabalho.
          </p>
        </div>
      </section>

      <hr />

      {/* VERSÃO 2 - MODERNA */}
      <section className="version2">
        <div className="hero">
          <button className="btn-search" onClick={handleBuscarEstagios}>🔍 Buscar Estágios</button>
          <button className="btn-my" onClick={handleMeusEstagios}>📁 Meus Estágios</button>
        </div>
        <div className="about">
          <h2>Quem Somos</h2>
          <p>
            Q.E. é o portal do estudante para encontrar estágios incríveis. Aqui você encontra suas oportunidades, acompanha sua evolução e ainda conhece nossa história de forma moderna e interativa!
          </p>
        </div>
      </section>

      <footer>
        Plataforma Q.E. – Quero Estágio | Vinculada ao Instituto Federal do Amapá – Campus Laranjal do Jari
        <small>©️ 2025 – Todos os direitos reservados</small>
        <div className="mascot">🐢</div>
      </footer>
    </div>
  );
}