# Around The U.S.

## Descripción del proyecto
Around U.S. es una aplicación web interactiva que permite a los usuarios crear y administrar una galería de fotos sobre sus lugares favoritos visitados o por conocer.

La aplicación permite personalizar su perfil, agregar nuevas tarjetas con imágenes y vista emegente al clickear en la imagen, dar "me gusta"a las tarjetas y eliminar las que ya no deseen.

## Funcionalidades

- **Edición de perfil**: Los usuarios pueden actualizar su nombre y descripción
- **Agregar tarjetas**: Posibilidad de añadir nuevos lugares con imagen y título
- **Interacción con tarjetas**: 
  - Dar "me gusta"  💓 
  - Eliminar tarjetas 🗑
  - Ver imágenes en tamaño completo (modal)
- **Diseño responsivo**: Adaptable a diferentes tamaños de pantalla

### Nuevas funcionalidades

- Validación de formularios en tiempo real
- Cierre de modales con clic en overlay
- Cierre de modales con tecla Esc
- Estados activos/inactivos de botones según validación

#### Funcionalidades específicas implementadas
- Validación del formulario "Editar perfil" (2-40 caracteres para nombre, 2-200 para descripción)
- Validación del formulario "Nuevo lugar" (2-30 caracteres para título, URL válida para imagen)
- Mensajes de error dinámicos
- Mejora en la experiencia de usuario

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica del contenido.
- **CSS3**: Estilos y diseño responsivo con Grid y Flexbox.
- **JavaScript (ES6)**: Funcionalidad interactiva y manipulación del DOM.
- **Metodología BEM**: Organización de clases CSS.

## Cómo usar la aplicación

1. **Editar perfil**: Haz clic en el botón de edición 🖊 junto al nombre.
2. **Agregar lugar**: Usa el botón "+" para añadir una nueva tarjeta.
3. **Interactuar**: Da "me gusta" 💓 o eliminar las tarjetas 🗑 según lo que se desee.
4. **Ver imágenes**: Haz clic en cualquier imagen para verla en grande 🗺.
--- 

## Actualización de la estructura del código

El proyecto fue refactorizado siguiendo los principios de la **Programación Orientada a Objetos (POO)** y una arquitectura modular basada en responsabilidades específicas.

### Conceptos implementados

- **Desestructuración de objetos** para simplificar la extracción y manejo de datos.
- **Renderización dinámica** de tarjetas mediante la clase `Section`, encargada de gestionar colecciones de elementos en el DOM.
- **Encapsulación y reutilización de código** mediante clases independientes y desacopladas.

### Clases principales

- **Card**: Gestiona la creación, visualización e interacción de las tarjetas.
- **Section**: Administra la renderización de listas de elementos en la página.
- **Popup**: Clase base para la gestión de ventanas emergentes.
- **PopupWithImage**: Extiende `Popup` para mostrar imágenes ampliadas y sus descripciones.
- **PopupWithForm**: Extiende `Popup` para manejar formularios y la recopilación de datos de entrada.
- **UserInfo**: Centraliza la gestión de la información del perfil del usuario.
- **FormValidator**: Gestiona la validación de formularios en tiempo real.
- **utils**: Contiene funciones auxiliares reutilizables.

Además, el archivo `index.js` fue reorganizado para contener únicamente la creación de instancias, configuración de componentes y asignación de eventos, manteniendo la lógica de negocio encapsulada dentro de las clases correspondientes.

## Enlace al proyecto
[https://jdcast072.github.io/web_project_around_es/](https://jdcast072.github.io/web_project_around_es/index.html)

## Autor
- **Nombre**: Juan Diego Castañeda González
- **Programa**: Desarrollo web | TripleTen
- **Año**: 2026