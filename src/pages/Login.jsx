import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !contrasena) {
      setError('Por favor completa todos los campos');
      setLoading(false);
      return;
    }

    try {
      const result = await login(email, contrasena);
      
      if (result.success) {
        navigate('/');
      } else {
        setError(result.error || 'Error al iniciar sesión');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#f5f6f7',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '"Open Sans", sans-serif',
      padding: '20px'
    }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>
        {/* Header con logo estilo Navbar */}
        <div className="w3-bar w3-theme-d2 w3-round-large" style={{ marginBottom: '16px', padding: '12px 16px', textAlign: 'center' }}>
          <span style={{ color: 'white', fontSize: '22px', fontWeight: 'bold' }}>
            <i className="fa fa-home w3-margin-right"></i>RedSocial
          </span>
        </div>

        {/* Card principal */}
        <div className="w3-card w3-round w3-white">
          <div className="w3-container" style={{ padding: '32px 24px' }}>
            {/* Avatar y título */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <img
                src="https://www.w3schools.com/w3images/avatar2.png"
                className="w3-circle"
                style={{ height: '80px', width: '80px' }}
                alt="Avatar"
              />
              <h4 style={{ marginTop: '12px', marginBottom: '4px' }}>Iniciar Sesión</h4>
              <p className="w3-text-grey" style={{ fontSize: '13px' }}>Bienvenido de vuelta a RedSocial</p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0 0 20px 0' }} />

            {/* Formulario */}
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#555', display: 'block', marginBottom: '4px' }}>
                  <i className="fa fa-envelope fa-fw w3-margin-right w3-text-theme"></i>Correo Electrónico
                </label>
                <input
                  className="w3-input w3-border w3-round"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  disabled={loading}
                  style={{ padding: '10px', fontSize: '14px' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#555', display: 'block', marginBottom: '4px' }}>
                  <i className="fa fa-lock fa-fw w3-margin-right w3-text-theme"></i>Contraseña
                </label>
                <input
                  className="w3-input w3-border w3-round"
                  type="password"
                  id="password"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  placeholder="••••••••"
                  disabled={loading}
                  style={{ padding: '10px', fontSize: '14px' }}
                />
              </div>

              {error && (
                <div className="w3-panel w3-pale-red w3-leftbar w3-border-red w3-round" style={{ padding: '10px 12px', margin: '0 0 16px 0' }}>
                  <p style={{ fontSize: '13px', margin: 0 }}><i className="fa fa-exclamation-circle w3-margin-right"></i>{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w3-button w3-block w3-theme-d2 w3-round w3-hover-theme"
                style={{
                  padding: '12px',
                  fontSize: '15px',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  marginTop: '8px'
                }}
              >
                {loading ? (
                  <><i className="fa fa-spinner fa-spin w3-margin-right"></i>Cargando...</>
                ) : (
                  <><i className="fa fa-sign-in w3-margin-right"></i>Iniciar Sesión</>
                )}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="w3-container w3-border-top w3-padding-16" style={{ textAlign: 'center', backgroundColor: '#fafafa' }}>
            <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="w3-text-theme" style={{ fontWeight: '600', textDecoration: 'none' }}>
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
