import { useState } from 'react'
import '../pages-styles/Messages.css'

function Messages() {
    const [selectedChat, setSelectedChat] = useState(null)

    const conversations = [
        { id: 1, name: 'Carlos López', lastMessage: 'Hey, ¿cómo estás?', avatar: 'https://www.w3schools.com/w3images/avatar3.png' },
        { id: 2, name: 'Ana García', lastMessage: 'Vamos a programar juntos mañana', avatar: 'https://www.w3schools.com/w3images/avatar4.png' },
        { id: 3, name: 'Pedro Martínez', lastMessage: 'Gracias por la ayuda', avatar: 'https://www.w3schools.com/w3images/avatar6.png' },
    ]

    const messages = [
        { id: 1, sender: 'other', text: 'Hola, ¿cómo estás?' },
        { id: 2, sender: 'me', text: 'Hola Carlos, muy bien. ¿Y tú?' },
        { id: 3, sender: 'other', text: 'Excelente, trabajando en un proyecto' },
        { id: 4, sender: 'me', text: 'Qué genial, cuéntame más' },
    ]

    return (
        <div style={{ marginTop: '80px', padding: '20px 40px', minHeight: '100vh', backgroundColor: '#f5f6f7' }}>
            <h1 style={{ color: '#2c3e50', marginBottom: '30px' }}>💬 Mensajes</h1>

            <div className="messages-container">
                <div className="conversations-list">
                    {conversations.map(conv => (
                        <div
                            key={conv.id}
                            className={`conversation-item ${selectedChat?.id === conv.id ? 'active' : ''}`}
                            onClick={() => setSelectedChat(conv)}
                        >
                            <img src={conv.avatar} alt={conv.name} />
                            <div>
                                <h3>{conv.name}</h3>
                                <p>{conv.lastMessage}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="chat-window">
                    {selectedChat ? (
                        <>
                            <div className="chat-header">
                                <img src={selectedChat.avatar} alt={selectedChat.name} />
                                <h2>{selectedChat.name}</h2>
                            </div>

                            <div className="messages-area">
                                {messages.map(msg => (
                                    <div key={msg.id} className={`message ${msg.sender}`}>
                                        <p>{msg.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="message-input">
                                <input type="text" placeholder="Escribe un mensaje..." />
                                <button>Enviar</button>
                            </div>
                        </>
                    ) : (
                        <div className="no-chat-selected">
                            <p>Selecciona una conversación para empezar a chatear</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Messages
