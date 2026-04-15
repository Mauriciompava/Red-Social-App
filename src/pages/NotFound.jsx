import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                {/* Animated Background */}
                <div className="animated-background">
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                    <div className="floating-code">{'</'}</div>
                    <div className="floating-code" style={{ animationDelay: '2s', right: '15%' }}>{'{ }'}</div>
                    <div className="floating-code" style={{ animationDelay: '4s', left: '20%' }}>{'||'}</div>
                </div>

                {/* 404 Content */}
                <div className="not-found-message">
                    <h1 className="error-code">404</h1>
                    <h2 className="error-title">PÁGINA NO ENCONTRADA</h2>
                    <p className="error-description">
                        La página que buscas se perdió en el ciberespacio...
                    </p>
                    <p className="error-status">
                        <span className="status-indicator"></span>
                        Error de sistema: Ruta no disponible
                    </p>

                    {/* Glitch Effect Text */}
                    <div className="glitch" data-text="Volviendo al inicio...">
                        <Link to="/" className="return-button">
                            RETORNAR AL INICIO
                        </Link>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="scanlines"></div>
            </div>
        </div>
    )
}

export default NotFound
