
# Proyecto Frontend: MarketPop

## Descripción
MarketPop es una aplicación web diseñada para gestionar publicaciones de productos. Los usuarios pueden crear, actualizar, eliminar y visualizar productos disponibles para compra o venta. La aplicación incluye autenticación de usuarios y una interfaz intuitiva para facilitar la navegación.

## Funcionalidades
- **Registro de usuarios**: Permite a los usuarios registrarse con su correo electrónico y contraseña.
- **Gestión de productos**:
  - Crear nuevos productos.
  - Editar productos existentes.
  - Eliminar productos propios.
  - Visualizar detalles de productos.

- **Autenticación**:
  - Inicio de sesión de usuarios.
  - Protección de rutas para acciones restringidas.

## Tecnologías utilizadas
- **Frontend**:
  - HTML5, CSS3 y JavaScript
  - Librerías externas: `chance.js` para generación de datos aleatorios.
- **Backend**:
  - Conexión a una API RESTful para gestionar usuarios y productos.
  - Autenticación mediante JWT.

## Instalación
1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/usuario/MarketPop.git
   ```
2. Accede al directorio del proyecto:
   ```bash
   cd MarketPop
   ```
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

## Uso
1. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```
2. Accede a la aplicación desde tu navegador:
   ```

   ```

## Inicializar base de datos
1. Ejecuta el script de inicialización:
   ```bash
   node initDB.js
   ```
2. Sigue las instrucciones en pantalla para confirmar la creación de datos iniciales.

## Estructura del proyecto
```
MarketPop/
├── shared/
│   ├── utilities/
│   │   └── constants.js
├── models/
│   ├── products.js
│   └── users.js
├── controllers/
│   ├── listpost-controller.js
│   └── home-controller.js
├── views/
│   ├── nav-view.js
│   ├── listpost-view.js
├── styles/
│   └── styles.css
├── index.html
├── listPost.html
├── product-detail.html
├── updatePost.html
├── register.html
├── initDB.js
└── README.md
```

## Autor
Desarrollado por Martin para el Bootcamp Fullstack Frontend.
