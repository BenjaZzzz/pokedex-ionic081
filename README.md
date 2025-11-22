# 🎮 Pokédex App - Ionic + Angular

Una aplicación moderna de Pokédex construida con **Ionic 7** y **Angular 16**, que muestra información detallada de Pokémon utilizando la PokéAPI.

![Pokédex App](https://img.shields.io/badge/Pokédex-App-red)  
![Ionic](https://img.shields.io/badge/Ionic-7-3880FF)  
![Angular](https://img.shields.io/badge/Angular-16-DD0031)

---

## ✨ Características

- **📱 Diseño Responsive** — Optimizado para móviles, tablets y desktop  
- **🔍 Búsqueda en Tiempo Real** — Busca Pokémon por nombre o número  
- **🎯 Filtrado Avanzado** — Ordena por número o nombre  
- **📊 Detalles Completos** — Información detallada de cada Pokémon  
- **🎨 Interfaz Moderna** — Diseño inspirado en la Pokédex oficial  
- **⚡ Alto Rendimiento** — Carga rápida y experiencia fluida  
- **🌈 Tipos de Pokémon** — Colores y estilos para cada tipo  

---

## 🚀 Tecnologías Utilizadas

- **Ionic 7**
- **Angular 16**
- **TypeScript**
- **SCSS**
- **PokéAPI**
- **Standalone Components**

---

## 📦 Instalación y Configuración

### **Prerrequisitos**
- Node.js 16+
- npm 6+
- Ionic CLI

### Instalar Ionic CLI

```bash
npm install -g @ionic/cli
ionic --version
```

<br/>

### Instalación del Proyecto
### **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/pokedex-ionic.git
cd pokedex-ionic
```

### **Instalar dependencias**
```bash
npm install
```

### **Ejecutar en modo desarrollo**
```bash
ionic serve
```
La aplicación estará disponible en http://localhost:8100

<br/>

### Build para Producción
```bash
# Build para web
ionic build

# Build para Android
ionic cap add android
ionic cap build android

# Build para iOS
ionic cap add ios
ionic cap build ios
```

<br/>

### 🎮 Uso de la Aplicación

### **Página Principal (Pokédex)**

- **Visualización en Grid:** Cartas de Pokémon con imagen, número y tipos

- **Búsqueda:** Barra de búsqueda para encontrar Pokémon específicos

- **Filtrado:** Opciones para ordenar por número o nombre

- **Navegación:** Click en cualquier Pokémon para ver detalles

<br/>

### **Página de Detalles**
- **Información General:** Nombre, número, imagen y tipos

- **Características:** Peso, altura y habilidades

- **Estadísticas:** Barras de progreso para cada stat (HP, Ataque, Defensa, etc.)

- **Navegación:** Flechas para moverse entre Pokémon anteriores/siguientes

- **Descripción:** Texto descriptivo del Pokémon

<br/>

## 🏗️ Estructura del Proyecto

````
src/
├── app/
│   ├── pages/
│   │   ├── pokedex/
│   │   │   ├── pokedex.page.ts
│   │   │   ├── pokedex.page.html
│   │   │   └── pokedex.page.scss
│   │   └── pokemon-detail/
│   │       ├── pokemon-detail.page.ts
│   │       ├── pokemon-detail.page.html
│   │       └── pokemon-detail.page.scss
│   ├── app.component.ts
│   └── main.ts
├── assets/
│   ├── icons/
│   └── images/
└── theme/
    └── variables.scss
````

### 🔧 Scripts Disponibles
````
# Desarrollo
npm start
ionic serve

# Build
npm run build
ionic build

# Lint
npm run lint

# Tests
npm test
````

### 📱 Características Técnicas

- **Arquitectura:** Standalone Components (Angular 16+)

- **Estado:** Servicios reactivos con Signals

- **Ruteo:** Angular Router con lazy loading

- **HTTP:** Fetch API nativa

- **Styling:** SCSS con variables CSS

- **Icons:** Ionicons integrados

- **Responsive:** Grid system de Ionic

<br/>

## 🤝 Contribución
¡Las contribuciones son bienvenidas! Si quieres mejorar esta Pokédex:

1. Haz fork del proyecto

2. Crea una rama para tu feature (git checkout -b feature/AmazingFeature)

3. Commit tus cambios (git commit -m 'Add some AmazingFeature')

4. Push a la rama (git push origin feature/AmazingFeature)

5. Abre un Pull Request

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## 🙏 Agradecimientos

- **PokéAPI** por proporcionar los datos de Pokémon

- **Ionic** Framework por el excelente framework UI

- **The Pokémon Company** por crear este universo maravilloso

### 📞 Contacto

<p style="font-weight: bold;">Felix Benjamin Ogando Peguero</p>
<p style>📧 opbenjamin21@gmail.com</p>

🔗 https://www.linkedin.com/in/felix-benjamin-ogando-peguero-b807a5267/

**Repositorio:** 

<br/>

<div align="center">
¡Atrapa todos! 🎯✨
Hecho con ❤️ para la comunidad Pokémon

<br/>
<img src="https://img.shields.io/badge/Ionic-7-3880FF?style=for-the-badge&logo=ionic&logoColor=white"/>
<img src="https://img.shields.io/badge/Angular-16-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>

</div>
