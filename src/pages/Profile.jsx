import { useState } from 'react'
import '../pages-styles/Profile.css'

function Profile() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: 'Juan Pérez',
            timestamp: 'Hace 2 horas',
            avatar: 'https://www.w3schools.com/w3images/avatar5.png',
            image: 'https://www.w3schools.com/w3images/forest.jpg',
            text: '',
            likes: 0,
            liked: false
        },
        {
            id: 2,
            author: 'Juan Pérez',
            timestamp: 'Ayer',
            avatar: 'https://www.w3schools.com/w3images/avatar5.png',
            image: 'https://www.w3schools.com/w3images/rocks.jpg',
            text: 'Feliz de anunciar que me uniré al equipo de diseño como colaborador.',
            likes: 0,
            liked: false
        }
    ])

    const [newPost, setNewPost] = useState('')

    const handlePublish = () => {
        if (newPost.trim()) {
            const post = {
                id: posts.length + 1,
                author: 'Juan Pérez',
                timestamp: 'Ahora',
                avatar: 'https://www.w3schools.com/w3images/avatar5.png',
                image: null,
                text: newPost,
                likes: 0,
                liked: false
            }
            setPosts([post, ...posts])
            setNewPost('')
        }
    }

    const handleLike = (id) => {
        setPosts(posts.map(post =>
            post.id === id ? {
                ...post,
                liked: !post.liked,
                likes: post.liked ? post.likes - 1 : post.likes + 1
            } : post
        ))
    }

    const events = [
        { id: 1, title: 'Reunión de diseño', day: 'Viernes', time: '15:00' },
        { id: 2, title: 'Workshop React', day: 'Sábado', time: '10:00' }
    ]

    return (
        <div className="profile-page">
            <div className="profile-banner">
                <img src="https://www.w3schools.com/w3images/mountains.jpg" alt="banner" />
            </div>

            <div className="profile-container">
                {/* SIDEBAR IZQUIERDO */}
                <div className="profile-sidebar left-sidebar">
                    <div className="profile-card">
                        <h3>Mi perfil</h3>
                        <img src="https://www.w3schools.com/w3images/avatar5.png" alt="profile" className="profile-avatar" />
                        <div className="profile-info">
                            <p className="info-item">
                                <i className="fa fa-briefcase"></i> Diseñador UI
                            </p>
                            <p className="info-item">
                                <i className="fa fa-map-marker"></i> Londres, Reino Unido
                            </p>
                            <p className="info-item">
                                <i className="fa fa-calendar"></i> 1 de abril, 1988
                            </p>
                            <p className="info-item">
                                <i className="fa fa-users"></i> 1.2k seguidores · 345 siguiendo
                            </p>
                        </div>
                        <button className="btn-edit-profile">
                            <i className="fa fa-edit"></i> Editar perfil
                        </button>
                    </div>

                    <div className="photos-section">
                        <h4>
                            <i className="fa fa-camera"></i> Fotos
                        </h4>
                        <div className="photos-grid">
                            <img src="https://www.w3schools.com/w3images/forest.jpg" alt="photo1" />
                            <img src="https://www.w3schools.com/w3images/rocks.jpg" alt="photo2" />
                            <img src="https://www.w3schools.com/w3images/beach.jpg" alt="photo3" />
                        </div>
                    </div>
                </div>

                {/* FEED CENTRAL */}
                <div className="profile-feed">
                    <div className="user-header">
                        <h1>Juan Pérez</h1>
                        <span className="username">@juanperez</span>
                        <p className="bio">Diseñador UI/UX. Amante del café y la fotografía.</p>
                    </div>

                    <div className="status-form">
                        <p className="form-label">¿Qué estás pensando?</p>
                        <textarea
                            value={newPost}
                            onChange={(e) => setNewPost(e.target.value)}
                            placeholder="Comparte algo..."
                            className="status-input"
                        />
                        <button
                            className="btn-publish"
                            onClick={handlePublish}
                            disabled={!newPost.trim()}
                        >
                            <i className="fa fa-pencil"></i> Publicar
                        </button>
                    </div>

                    <div className="posts-feed">
                        {posts.map(post => (
                            <div key={post.id} className="post-card">
                                {post.image && (
                                    <img src={post.image} alt="post" className="post-image" />
                                )}
                                <div className="post-footer">
                                    <div className="post-author">
                                        <img src={post.avatar} alt={post.author} className="post-avatar" />
                                        <div>
                                            <h4>{post.author}</h4>
                                            <span className="post-time">{post.timestamp}</span>
                                        </div>
                                    </div>
                                    {post.text && <p className="post-text">{post.text}</p>}
                                    <div className="post-actions">
                                        <button
                                            className={`action-btn ${post.liked ? 'liked' : ''}`}
                                            onClick={() => handleLike(post.id)}
                                        >
                                            <i className="fa fa-thumbs-up"></i> Me gusta
                                        </button>
                                        <button className="action-btn">
                                            <i className="fa fa-comment"></i> Comentar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SIDEBAR DERECHO */}
                <div className="profile-sidebar right-sidebar">
                    <div className="events-section">
                        <h3>
                            <i className="fa fa-calendar"></i> Próximos eventos
                        </h3>
                        {events.map(event => (
                            <div key={event.id} className="event-item">
                                <p className="event-title">{event.title}</p>
                                <p className="event-time">{event.day} {event.time}</p>
                            </div>
                        ))}
                        <button className="btn-info">Info</button>
                    </div>

                    <div className="ads-section">
                        <p>ADS</p>
                        <div className="ad-placeholder">
                            Espacio publicitario
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
