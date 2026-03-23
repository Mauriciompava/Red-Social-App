# 🚀 Guía Rápida - Red Social App en React

## ✨ ¿Qué se ha hecho?

Se ha migrado completamente la plantilla HTML de red social a **React**, desglosando todos los elementos en **componentes individuales y reutilizables**.

## 📦 Componentes Creados

| Componente | Descripción | Estado |
|-----------|------------|--------|
| **Navbar** | Barra de navegación con dropdown | ✅ Responsiva |
| **ProfileCard** | Tarjeta de perfil del usuario | ✅ Estática |
| **Accordion** | Menú expandible (Grupos, Eventos, Fotos) | ✅ Interactivo |
| **Interests** | Etiquetas de intereses | ✅ Responsiva |
| **AlertBox** | Caja de alerta cerrable | ✅ Interactiva |
| **StatusForm** | Formulario para crear posts | ✅ Funcional |
| **Post** | Componente de publicación con likes | ✅ Interactivo |
| **UpcomingEvents** | Tarjeta de eventos próximos | ✅ Estática |
| **FriendRequest** | Solicitud de amistad interactiva | ✅ Funcional |
| **Ads** | Espacio para publicidades | ✅ Placeholder |
| **BugIcon** | Ícono decorativo | ✅ Estático |
| **Footer** | Pie de página con info | ✅ Estático |

## 🎛️ Componentes Contenedores

- **LeftSidebar** - Agrupa: ProfileCard + Accordion + Interests + AlertBox
- **MainFeed** - Agrupa: StatusForm + Posts (dinámico)
- **RightSidebar** - Agrupa: UpcomingEvents + FriendRequest + Ads + BugIcon
- **Layout** - Componente padre que une todo

## 📂 Estructura de Archivos

```
src/
├── components/
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── ProfileCard.css
│   │   ├── ... (16 archivos CSS total)
│   │   └── Layout.css
│   ├── Navbar.jsx
│   ├── Layout.jsx
│   ├── LeftSidebar.jsx
│   ├── MainFeed.jsx
│   ├── RightSidebar.jsx
│   ├── ... (más de 15 componentes)
│   ├── index.js (exportador central)
│   └── README.md (documentación detallada)
├── App.jsx (actualizado)
└── index.css (temas W3.CSS)
```

## 🎨 Características

✅ **Completamente Responsivo**
- Menú hamburguesa en móvil
- Sidebars ocultas en tabletas
- Optimizado para todos los tamaños

✅ **Componentes Interactivos**
- Likes en posts (con contador)
- Acordeón expandible
- Formulario reactivo
- Solicitudes de amistad interactivas

✅ **Estilos Profesionales**
- Sombras y bordes redondeados
- Tema de colores consistente (W3.CSS)
- Transiciones suaves
- Animaciones en hover

✅ **Modular y Escalable**
- Fácil agregar nuevos componentes
- Props claramente definidas
- Estado interno cuando es necesario

## 🚀 Cómo Ejecutar

```bash
# Instalar dependencias (si no lo has hecho)
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📝 Uso de Componentes

### Importar un componente individual:
```jsx
import { Post } from './components'

export default function MyComponent() {
  return (
    <Post 
      author="Juan Pérez"
      avatar="https://..."
      timestamp="5 min"
      content="¡Hola mundo!"
      images={['https://...']}
    />
  )
}
```

### Usar el layout completo:
```jsx
import Layout from './components/Layout'

function App() {
  return <Layout />
}
```

## 🔧 Personalización

### Cambiar datos del perfil
Edita en `ProfileCard.jsx`:
```jsx
<p><i className="fa fa-pencil...">Designer, UI</p>
```

### Agregar nuevos posts iniciales
Edita en `MainFeed.jsx`:
```jsx
const [posts, setPosts] = useState([
  // Agrega aquí más posts...
])
```

### Ajustar colores/temas
Edita en `index.css`:
```css
:root {
  --accent: #00bcd4; /* Cambia este color */
}
```

## 🌐 Responsividad

| Dispositivo | Breakpoint | Comportamiento |
|------------|-----------|----------------|
| Móvil | ≤ 768px | 1 columna, menú hamburguesa |
| Tablet | 768-992px | 2 columnas |
| Desktop | > 992px | 3 columnas (completo) |

## 📚 Documentación Completa

Para más detalles sobre cada componente, consulta:
`src/components/README.md`

## 💡 Próximos Pasos

1. **Backend**: Conectar con API Node.js/Express
2. **Base de datos**: Usar MongoDB/PostgreSQL
3. **Autenticación**: JWT o Firebase
4. **Mejoras UI**: Animaciones, temas oscuros
5. **Funcionalidades**: Búsqueda, filtros, notificaciones

---

**¡Proyecto listo para desarrollar!** 🎉
