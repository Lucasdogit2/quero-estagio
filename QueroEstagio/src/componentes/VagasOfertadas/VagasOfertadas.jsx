import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VagasOfertadas.css';

export default function VagasOfertadas() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  // Simulação de vagas já cadastradas pelo ofertante
  const [vagas] = useState([
    {
      id: 1,
      titulo: "Estágio em Laboratório Avançado",
      tipo: "Interno",
      vagas: 3,
      horas: 20,
      inicio: "15/05/2025",
      termino: "15/11/2025"
    },
    {
      id: 2,
      titulo: "Desenvolvimento de Sistemas Acadêmicos",
      tipo: "Interno",
      vagas: 2,
      horas: 20,
      inicio: "01/06/2025",
      termino: "01/12/2025"
    }
  ]);

  return (
    <div className="login-wrapper vagas-ofertadas-root">
      {/* Topo Padrão do Ofertante */}
      <header className="topbar">
        <div className="brand">
          <div className="logo-square">Q.E</div>
          <div>
            <div style={{ fontSize: '0.95rem' }}>Q.E. – Quero Estágio</div>
            <div className="ifap-text">Instituto Federal do Amapá — Campus Laranjal do Jari</div>
          </div>
        </div>
        <button className="menu-btn" onClick={() => setMenuAberto(!menuAberto)}>☰ Menu</button>
      </header>

      {/* Menu Lateral */}
      {menuAberto && (
        <nav className="menu-panel">
          <a href="#" onClick={() => navigate('/painel-ofertante')}>Painel Principal</a>
          <a href="#" onClick={() => navigate('/ofertar-vaga')}>Ofertar Nova Vaga</a>
          <a href="#" onClick={() => navigate('/ofertante')} style={{ color: '#FF7F50', fontWeight: 'bold' }}>Sair</a>
        </nav>
      )}

      {/* Conteúdo Principal */}
      <main className="container">
        <h1 className="page-title">Seus Estágios Ofertados</h1>
        <p className="page-subtitle">Gerencie as vagas e os estudantes vinculados aos seus projetos.</p>

        <div className="cards-container">
          {vagas.map((vaga) => (
            <div key={vaga.id} className="stage-card">
              <div className="card-header">
                <h2>{vaga.titulo}</h2>
                <span className={`badge ${vaga.tipo.toLowerCase()}`}>{vaga.tipo}</span>
              </div>
              
              <div className="card-details">
                <p><span>Vagas:</span> {vaga.vagas}</p>
                <p><span>Carga Horária:</span> {vaga.horas}h semanais</p>
                <p><span>Período:</span> {vaga.inicio} até {vaga.termino}</p>
              </div>

              <div className="card-actions">
                {/* Aqui os botões agora levam para as telas novas! */}
                <button 
                  className="btn-action btn-access" 
                  onClick={() => navigate('/detalhes-ofertante')}
                >
                  Acessar Estágio
                </button>
                <button 
                  className="btn-action btn-orders" 
                  onClick={() => navigate('/pedidos-ofertante')}
                >
                  Ver Pedidos
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Rodapé Padrão */}
      <footer className="bottombar">
        Plataforma Q.E. – Quero Estágio | IFAP – Campus Laranjal do Jari
        <small>©️ 2025 – Todos os direitos reservados</small>
      </footer>
    </div>
  );
}