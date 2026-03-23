# Componentes de Red Social - React

Este directorio contiene todos los componentes React individuales migrados de la plantilla HTML de red social.

## 📁 Estructura de Componentes

### Componentes Principales

#### **Navbar**
- **Archivo**: `Navbar.jsx`
- **Descripción**: Barra de navegación superior con menú responsivo
- **Props**: Ninguna
- **Características**:
  - Menú hamburguesa en dispositivos pequeños
  - Dropdown de notificaciones
  - Avatar del usuario
  - Enlaces de navegación

#### **Layout**
- **Archivo**: `Layout.jsx`
- **Descripción**: Componente contenedor principal que organiza todo el layout
- **Props**: Ninguna
- **Estructura**: Navbar + LeftSidebar + MainFeed + RightSidebar + Footer

#### **LeftSidebar**
- **Archivo**: `LeftSidebar.jsx`
- **Descripción**: Barra lateral izquierda que agrupa componentes de perfil
- **Props**: Ninguna
- **Contenido**: ProfileCard, Accordion, Interests, AlertBox

#### **MainFeed**
- **Archivo**: `MainFeed.jsx`
- **Descripción**: Área central con formulario de estado y feed de publicaciones
- **Props**: Ninguna
- **Características**:
  - Formulario para crear nuevos posts
  - Lista de posts con estado reactivo
  - Soporte para publicaciones con imágenes

#### **RightSidebar**
- **Archivo**: `RightSidebar.jsx`
- **Descripción**: Barra lateral derecha con eventos y solicitudes
- **Props**: Ninguna
- **Contenido**: UpcomingEvents, FriendRequest, Ads, BugIcon

### Componentes de Perfil (LeftSidebar)

#### **ProfileCard**
- **Archivo**: `ProfileCard.jsx`
- **Descripción**: Tarjeta con información básica del perfil
- **Props**: Ninguna
- **Información mostrada**: Avatar, profesión, ubicación, fecha de nacimiento

#### **Accordion**
- **Archivo**: `Accordion.jsx`
- **Descripción**: Menú acordeón expandible con tres secciones
- **Props**: Ninguna
- **Secciones**: My Groups, My Events, My Photos
- **Estado**: Expandible/Contraíble

#### **Interests**
- **Archivo**: `Interests.jsx`
- **Descripción**: Muestra intereses como etiquetas con estilos W3.CSS
- **Props**: Ninguna
- **Características**: 10 etiquetas con variaciones de color

#### **AlertBox**
- **Archivo**: `AlertBox.jsx`
- **Descripción**: Caja de alerta desplegable
- **Props**: Ninguna
- **Características**: Botón de cerrar, ocultable

### Componentes de Feed (MainFeed)

#### **StatusForm**
- **Archivo**: `StatusForm.jsx`
- **Descripción**: Formulario para crear publicaciones
- **Props**: 
  - `onPostSubmit(content)` - Callback al enviar
- **Características**: Textarea, validación de contenido

#### **Post**
- **Archivo**: `Post.jsx`
- **Descripción**: Componente individual de publicación
- **Props**:
  - `author` (string) - Nombre del autor
  - `avatar` (string) - URL del avatar
  - `timestamp` (string) - Tiempo de publicación
  - `content` (string) - Contenido del post
  - `images` (array) - URLs de imágenes (opcional)
- **Características**:
  - Sistema de likes con contador
  - Soporte para múltiples imágenes
  - Botones de comentarios

### Componentes de Sidebar Derecha (RightSidebar)

#### **UpcomingEvents**
- **Archivo**: `UpcomingEvents.jsx`
- **Descripción**: Muestra eventos próximos
- **Props**: Ninguna
- **Contenido**: Imagen, título, hora, botón de información

#### **FriendRequest**
- **Archivo**: `FriendRequest.jsx`
- **Descripción**: Tarjeta de solicitud de amistad
- **Props**: Ninguna
- **Características**:
  - Botones aceptar/rechazar
  - Cambia de estado tras la acción
  - Avatar del usuario

#### **Ads**
- **Archivo**: `Ads.jsx`
- **Descripción**: Espacio para publicidades
- **Props**: Ninguna
- **Características**: Placeholder simple

#### **BugIcon**
- **Archivo**: `BugIcon.jsx`
- **Descripción**: Ícono decorativo de insecto
- **Props**: Ninguna

#### **Footer**
- **Archivo**: `Footer.jsx`
- **Descripción**: Pie de página con información y créditos
- **Props**: Ninguna
- **Características**: Dos secciones con estilos diferentes

## 🎨 Sistema de Estilos

Todos los componentes tienen archivos CSS individuales en la carpeta `styles/`:

- `Navbar.css` - Estilos de navegación
- `ProfileCard.css` - Tarjeta de perfil
- `Accordion.css` - Acordeón
- `Interests.css` - Etiquetas de intereses
- `AlertBox.css` - Caja de alerta
- `StatusForm.css` - Formulario de estado
- `Post.css` - Publicaciones
- `UpcomingEvents.css` - Eventos
- `FriendRequest.css` - Solicitudes de amistad
- `Ads.css` - Publicidades
- `BugIcon.css` - Ícono
- `Footer.css` - Pie de página
- `LeftSidebar.css` - Sidebar izquierda
- `RightSidebar.css` - Sidebar derecha
- `Layout.css` - Estilos generales del layout

## 📱 Responsividad

Todos los componentes son responsivos gracias a:
- Sistema de grid de W3.CSS
- Media queries en CSS
- Clases `w3-hide-small`, `w3-hide-medium`, `w3-hide-large`

### Breakpoints:
- **Pequeño**: <= 768px
- **Medio**: 768px - 992px  
- **Grande**: > 992px

## 🚀 Cómo Usar

### Importar componentes individuales:
```jsx
import { Navbar, ProfileCard, Post } from './components'
```

### Usar el Layout completo:
```jsx
import Layout from './components/Layout'

function App() {
  return <Layout />
}
```

### Crear un Post:
```jsx
<Post 
  author="John Doe"
  avatar="https://example.com/avatar.jpg"
  timestamp="5 min"
  content="Hola mundo!"
  images={['https://example.com/image.jpg']}
/>
```

## 📋 Características Implementadas

✅ Migración completa de HTML a React
✅ Componentes reutilizables
✅ Estado reactivo (likes, posts, acordeón)
✅ Diseño responsivo
✅ Estilos W3.CSS integrados
✅ Sistema de iconos Font Awesome
✅ Interactividad total
✅ Modular y fácil de expandir

## 🔄 Próximas Mejoras

- [ ] Integración con backend API
- [ ] Autenticación de usuarios
- [ ] Carga dinámica de posts
- [ ] Sistema de comentarios expandido
- [ ] Búsqueda de usuarios
- [ ] Notificaciones en tiempo real
- [ ] Modo oscuro
