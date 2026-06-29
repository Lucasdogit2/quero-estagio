import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

export default function Login() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (matricula.trim() !== '' && senha.trim() !== '') {
      navigate('/painel'); 
    } else {
      alert('Por favor, preencha a matrícula e a senha!');
    }
  };

  const handleOfertanteClick = () => {
    navigate('/ofertante'); 
  };

  return (
    <div className="login-wrapper tela-estudante">
      {/* Topbar / Header */}
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
          <h1 className="login-title">Acesse sua conta</h1>
          <p className="login-sub">Entre com seu login SUAP para acessar o painel de estágio.</p>

          <form onSubmit={handleLogin}>
            <div className="field">
              <label htmlFor="matricula">Matrícula (SUAP)</label>
              <input 
                id="matricula" 
                type="text" 
                placeholder="Digite sua matrícula SUAP" 
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
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
              <button type="button" className="btn-link" onClick={handleOfertanteClick}>
                Entrar como ofertante de estágio
              </button>
            </div>

            <p className="alt-note">
              Ao entrar, você será redirecionado para autenticação via SUAP. Caso não tenha credenciais, procure a secretaria do seu curso.
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