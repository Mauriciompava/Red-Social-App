import { useState } from 'react'
import '../pages-styles/Settings.css'

function Settings() {
  const [activeTab, setActiveTab] = useState('general')
  const [formData, setFormData] = useState({
    nombre: 'Juan Pérez',
    email: 'juan@email.com',
    biografia: 'Diseñador UI/UX. Amante del café.',
    telefono: '+57 300 123 4567',
    ubicacion: 'Bogotá, Colombia',
    sitioWeb: 'www.miportafolio.com',
    privacidad: 'Público',
    notificaciones: true,
    emailUpdates: true,
    darkMode: false,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleToggle = (key) => {
    setFormData(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleSave = () => {
    console.log('Cambios guardados:', formData)
    alert('✅ Cambios guardados exitosamente')
  }

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1>⚙️ Configuración de la cuenta</h1>
      </div>

      <div className="settings-tabs">
        <button
          className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
          onClick={() => setActiveTab('general')}
        >
          General
        </button>
        <button
          className={`tab-button ${activeTab === 'privacidad' ? 'active' : ''}`}
          onClick={() => setActiveTab('privacidad')}
        >
          Privacidad
        </button>
        <button
          className={`tab-button ${activeTab === 'notificaciones' ? 'active' : ''}`}
          onClick={() => setActiveTab('notificaciones')}
        >
          Notificaciones
        </button>
      </div>

      <div className="settings-content">
        {/* TAB GENERAL */}
        {activeTab === 'general' && (
          <div className="tab-content">
            <h2>Información personal</h2>

            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                placeholder="Tu teléfono"
              />
            </div>

            <div className="form-group">
              <label>Ubicación</label>
              <input
                type="text"
                name="ubicacion"
                value={formData.ubicacion}
                onChange={handleInputChange}
                placeholder="Ciudad, País"
              />
            </div>

            <div className="form-group">
              <label>Sitio Web</label>
              <input
                type="url"
                name="sitioWeb"
                value={formData.sitioWeb}
                onChange={handleInputChange}
                placeholder="www.tuportafolio.com"
              />
            </div>

            <div className="form-group">
              <label>Biografía</label>
              <textarea
                name="biografia"
                value={formData.biografia}
                onChange={handleInputChange}
                placeholder="Cuéntanos sobre ti"
                rows="5"
              />
            </div>

            <button className="save-button" onClick={handleSave}>
              💾 Guardar cambios
            </button>
          </div>
        )}

        {/* TAB PRIVACIDAD */}
        {activeTab === 'privacidad' && (
          <div className="tab-content">
            <h2>Privacidad y seguridad</h2>

            <div className="settings-option">
              <div className="option-info">
                <h3>Visibilidad del Perfil</h3>
                <p>Controla quién puede ver tu perfil</p>
              </div>
              <select
                name="privacidad"
                value={formData.privacidad}
                onChange={handleInputChange}
                className="select-input"
              >
                <option value="Público">🌍 Público - Todos pueden verlo</option>
                <option value="Amigos">👥 Solo amigos</option>
                <option value="Privado">🔒 Privado - Solo yo</option>
              </select>
            </div>

            <div className="settings-option">
              <div className="option-info">
                <h3>Mostrar última conexión</h3>
                <p>Permite que otros vean cuándo fuiste visto por última vez</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={true}
                  onChange={() => { }}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="settings-option">
              <div className="option-info">
                <h3>Permitir búsqueda en motores</h3>
                <p>Los motores de búsqueda podrán indexar tu perfil</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={false}
                  onChange={() => { }}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="danger-zone">
              <h3>Zona de Peligro</h3>
              <button className="danger-button">🚪 Cerrar Sesión</button>
              <button className="danger-button delete">🗑️ Eliminar Cuenta Permanentemente</button>
            </div>
          </div>
        )}

        {/* TAB NOTIFICACIONES */}
        {activeTab === 'notificaciones' && (
          <div className="tab-content">
            <h2>Preferencias de notificaciones</h2>

            <div className="settings-option">
              <div className="option-info">
                <h3>Notificaciones del Sistema</h3>
                <p>Recibe alertas sobre mensajes y menciones</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={formData.notificaciones}
                  onChange={() => handleToggle('notificaciones')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="settings-option">
              <div className="option-info">
                <h3>Notificaciones por Email</h3>
                <p>Recibe resúmenes y notificaciones por correo</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={formData.emailUpdates}
                  onChange={() => handleToggle('emailUpdates')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="settings-option">
              <div className="option-info">
                <h3>Solicitudes de Amistad</h3>
                <p>Notificaciones cuando alguien te envía solicitud</p>
              </div>
              <label className="switch">
                <input type="checkbox" checked={true} onChange={() => { }} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="settings-option">
              <div className="option-info">
                <h3>Publicaciones en tu Muro</h3>
                <p>Notificaciones cuando publican en tu perfil</p>
              </div>
              <label className="switch">
                <input type="checkbox" checked={true} onChange={() => { }} />
                <span className="slider"></span>
              </label>
            </div>

            <button className="save-button" onClick={handleSave}>
              💾 Guardar Preferencias
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Settings
