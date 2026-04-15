import { useState } from 'react'
import '../pages-styles/Groups.css'

function Groups() {
  const [searchTerm, setSearchTerm] = useState('')

  const myGroups = [
    {
      id: 1,
      name: 'Diseñadores UI/UX',
      members: '1.2k',
      publications: '15 publicaciones nuevas',
      avatar: 'https://www.w3schools.com/w3images/avatar3.png'
    },
    {
      id: 2,
      name: 'Desarrollo Web',
      members: '3.4k',
      publications: '8 publicaciones nuevas',
      avatar: 'https://www.w3schools.com/w3images/avatar4.png'
    },
    {
      id: 3,
      name: 'Fotografía Creativa',
      members: '856',
      publications: '3 publicaciones nuevas',
      avatar: 'https://www.w3schools.com/w3images/avatar5.png'
    },
  ]

  const suggestedGroups = [
    {
      id: 1,
      name: 'Viajeros del mundo',
      members: '5.1k miembros',
      avatar: 'https://www.w3schools.com/w3images/forest.jpg'
    },
    {
      id: 2,
      name: 'Tecnología y gadgets',
      members: '8.2k miembros',
      avatar: 'https://www.w3schools.com/w3images/rocks.jpg'
    },
    {
      id: 3,
      name: 'Cocina fácil',
      members: '2.7k miembros',
      avatar: 'https://www.w3schools.com/w3images/beach.jpg'
    },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Buscando grupos:', searchTerm)
  }

  return (
    <div className="groups-page">
      <div className="groups-container">
        {/* MIS GRUPOS - IZQUIERDA */}
        <div className="groups-column left-column">
          <div className="section-header">
            <h2>👥 Mis grupos</h2>
          </div>

          <div className="groups-list">
            {myGroups.map(group => (
              <div key={group.id} className="group-item">
                <img src={group.avatar} alt={group.name} className="group-avatar" />
                <div className="group-details">
                  <h3>{group.name}</h3>
                  <p className="group-info">{group.members} miembros · {group.publications}</p>
                </div>
                <button className="btn-view">Ver grupo</button>
              </div>
            ))}
          </div>

          <button className="btn-create-group">
            <i className="fa fa-plus"></i> Crear nuevo grupo
          </button>
        </div>

        {/* GRUPOS SUGERIDOS + BÚSQUEDA - DERECHA */}
        <div className="groups-column right-column">
          <div className="section-header">
            <h2>⭐ Grupos sugeridos</h2>
          </div>

          <div className="groups-list">
            {suggestedGroups.map(group => (
              <div key={group.id} className="group-item">
                <img src={group.avatar} alt={group.name} className="group-avatar" />
                <div className="group-details">
                  <h3>{group.name}</h3>
                  <p className="group-info">{group.members}</p>
                </div>
                <button className="btn-join">Unirse</button>
              </div>
            ))}
          </div>

          {/* BUSCADOR */}
          <div className="search-section">
            <h3>Buscar grupos</h3>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Nombre del grupo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="btn-search">
                <i className="fa fa-search"></i> Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Groups
