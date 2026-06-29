import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginOfertante.css'; 

export default function LoginOfertante() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [identificador, setIdentificador] = useState('');
  const [senha, setSenha] = useState('');
  
  const navigate = useNavigate();

  // Procure a função handleLogin dentro de LoginOfertante.jsx e mude para:
    const handleLogin = (e) => {
  e.preventDefault();
  if (identificador.trim() !== '' && senha.trim() !== '') {
    navigate('/painel-ofertante'); // Alterado aqui!
  } else {
    alert('Por favor, preencha o e-mail/CNPJ e a senha!');
  }
    };

  const handleEstudanteClick = () => {
    navigate('/'); 
  };

  return (
    <div className="login-wrapper tela-ofertante">
      {/* Topbar */}
      <header className="topbar" role="banner">
        <div className="brand">
          <div className="logo-square" aria-hidden="true">Q.E</div>
          <div>
            <div style={{ fontSize: '0.95rem' }}>Q.E. – Quero Estágio</div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.9)' }}>
              Instituto Federal do Amapá — Campus Laranjal do Jari
            </div>
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
        <nav className="menu-panel">
          <a href="#" onClick={() => setMenuAberto(false)}>Sobre</a>
          <a href="#" onClick={() => setMenuAberto(false)}>Ajuda</a>
          <a href="#" onClick={() => setMenuAberto(false)}>Contato</a>
        </nav>
      )}

      {/* Conteúdo Principal */}
      <main className="container">
        <section className="login-card">
          <h1 className="login-title">Área do Ofertante</h1>
          <p className="login-sub">Entre com sua conta corporativa para gerenciar e ofertar vagas.</p>

          <form onSubmit={handleLogin}>
            <div className="field">
              <label htmlFor="identificador">E-mail ou CNPJ</label>
              <input 
                id="identificador" 
                type="text" 
                placeholder="Digite seu e-mail ou CNPJ" 
                value={identificador}
                onChange={(e) => setIdentificador(e.target.value)}
                required 
              />
            </div>

            <div className="field">
              <label htmlFor="senha">Senha</label>
              <input 
                id="senha" 
                type="password" 
                placeholder="Digite sua senha" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required 
              />
            </div>

            <div className="actions">
              <button type="submit" className="btn-primary">Entrar</button>
              <button type="button" className="btn-link" onClick={handleEstudanteClick}>
                Entrar como estudante (SUAP)
              </button>
            </div>

            <p className="alt-note">
              Caso sua empresa ou setor ainda não possua cadastro no Quero Estágio, entre em contato com o setor de extensões do IFAP.
            </p>
          </form>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bottombar">
        Plataforma Q.E. – Quero Estágio | Vinculada ao Instituto Federal do Amapá – Campus Laranjal do Jari
        <small>©️ 2025 – Todos os direitos reservados</small>
      </footer>
    </div>
  );
}