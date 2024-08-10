import TAGS from "./Tags.js";

//

const PROJECTS = [
  {
    title: "WikiTravel - Conoce los sitios de interés que te rodean",
    description:
      "Aplicación móvil diseñada para viajeros empedernidos, los que nunca se cansan de visitar nuevos lugares y vivir nuevas experiencias constantemente. Podrás conocer qué sitios de interés te rodean. Creado desde cero con VUE.js, Ionic y Tailwind CSS.",
    link: "https://signvm-flex.web.app/",
    android: "/apks/WikiTravel.apk",
    image: "/projects/wikitravel.webp",
    tags: [TAGS.VUE, TAGS.IONIC, TAGS.FIREBASE, TAGS.TAILWIND],
  },
  {
    title: "FLEX - Una aplicación para tus rutinas de gimnasio",
    description:
      "Aplicación web móvil para llevar un seguimiento de tus rutinas y ejercicios de gimnasio. Creado desde cero con VUE.js, Firebase y Tailwind CSS.",
    link: "https://signvm-flex.web.app/",
    github: "https://github.com/Marioby9/Flex",
    image: "/projects/Flex.webp",
    tags: [TAGS.VUE, TAGS.FIREBASE, TAGS.TAILWIND],
  },
  {
    title: "BookSphere - Aplicación web gestora para una biblioteca",
    description:
      "Aplicación web para gestionar tu propia biblioteca de libros. Parte de cliente y administrador. Creada desde cero con HTML5, CSS3, PHP, y JavaScript",
    link: "https://bookspheredev.000webhostapp.com/",
    github: "https://github.com/Marioby9/BookSphere",
    image: "/projects/booksphere.webp",
    tags: [TAGS.PHP, TAGS.JS, TAGS.CSS, TAGS.MYSQL],
  },
  {
    title: "NovaForge - Aplicación IOT de domótica para controlar tu hogar",
    description:
      "Aplicación web para gestionar espacios con sensores y ejecutores. Parte de cliente y servidor a consumir. Creada desde cero con VUE.js y Tailwind CSS.",
    link: "https://marioby9.github.io/NovaForge/",
    github: "https://github.com/Marioby9/NovaForge",
    image: "/projects/novaforge.webp",
    tags: [TAGS.VUE, TAGS.FIREBASE, TAGS.TAILWIND],
  },
  {
    title: "NovaServer - Aplicación servidor para NovaForge.",
    description:
      "Aplicación web para modificar los valores de los sensores y comprobar la reactividad de los ejectures. Parte de servidor que consume NovaForge. Creada desde cero con VUE.js y Tailwind CSS.",
    link: "https://marioby9.github.io/NovaServer/",
    github: "https://github.com/Marioby9/NovaServer",
    image: "/projects/novaServer.webp",
    tags: [TAGS.VUE, TAGS.FIREBASE, TAGS.TAILWIND],
  },
  {
    title: "VideoClub - Aplicación ORM y MVC en servidor.",
    description:
      "Aplicación web gestora para un videoclub real. El videoclub puede añadir, eliminar y actualizar productos. Sistema de BBDD con tecnología ORM. Creada desde cero con HTML5, CSS3, PHP, y JavaScript.",
    link: "https://videocluborm.000webhostapp.com/",
    github: "https://github.com/Marioby9/VideoClub",
    image: "/projects/videoclub.webp",
    tags: [TAGS.PHP, TAGS.JS, TAGS.CSS, TAGS.MYSQL],
  },
  {
    title: "PokeApi - Buscador de Pokemons.",
    description:
      "Aplicación web para buscar pokemons y mostrar su información. Creado con HTML, CSS y JavaScript Vanilla. Consume datos JSON de la API con la librería Axios",
    link: "https://marioby9.github.io/PokeAPI/",
    github: "https://github.com/Marioby9/PokeAPI",
    image: "/projects/pokeapi.webp",
    tags: [TAGS.JS, TAGS.CSS],
  },
  {
    title: "BiblioTech - Controla todos tus hobbies con una sola aplicación.",
    description:
      "Proyecto final de 1º DAW. Aplicación de escritorio para llevar un seguimiento de tus hobbies (libros, juegos y música). Puedes añadir recurso, estado (finalizado o no) y añadirlo a una lista de favoritos. Desarrollado con librerías de JavaFX, acceso a Base de datos de Oracle y estilado con CSS.",
    github: "https://github.com/Marioby9/BiblioTech",
    image: "/projects/bibliotech.webp",
    tags: [TAGS.Java, TAGS.CSS, TAGS.ORACLE],
  },
  {
    title:
      "Password-Generator - Genera contraseñas seguras con los parámetros que quieras.",
    description:
      "Mi primer proyecto de escritorio. Aplicación de escritorio desarrollada con JavaFX. Genera contraseñas aleatorias con el nivel de seguridad y los parámetros indicados por el usuario. Una vez generada, se puede copiar al portapapeles.",
    github: "https://github.com/Marioby9/Password-Generator",
    image: "/projects/passwordGen.webp",
    tags: [TAGS.Java, TAGS.CSS],
  },
];

export default PROJECTS;
