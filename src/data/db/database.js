import Mock from "../mock";

const database = {
  information: {
    name: "Sébastien Gonzalez",
    aboutContent: "FullStack Développeur.",
    age: 33,
    phone: "",
    nationality: "French",
    language: " French, English",
    email: "",
    address: "",
    freelanceStatus: "",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/sebastiengonzalez66/",
      dribbble: "",
      github: "https://github.com/seb6634",
    },
    brandImage: "/images/brand-image.jpg",
    aboutImage: "/images/brand-image.jpg",
    aboutImageLg: "/images/about-image-lg.jpg",
    cvfile: "files/cv.pdf",
  },
  services: [
    {
      title: "JS",
      icon: "javascript",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "NodeJs",
      icon: "nodejs",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "React",
      icon: "react",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "CSS",
      icon: "css3",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "HTML",
      icon: "html5",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "Python",
      icon: "python",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "SQL",
      icon: "database",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "Git",
      icon: "git",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "Docker",
      icon: "docker",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: "Burdette Turner",
        designation: "Web Developer, Abc Company",
      },
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: "Susan Yost",
        designation: "Client",
      },
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: "Irving Feeney",
        designation: "Fiverr Client",
      },
    },
  ],
  skills: [
    {
      title: "HTML5",
      value: 95,
    },
    {
      title: "CSS3",
      value: 90,
    },
    {
      title: "Javascript",
      value: 70,
    },
    {
      title: "NodeJS",
      value: 85,
    },
    {
      title: "ReactJS",
      value: 80,
    },
    {
      title: "Python",
      value: 65,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Coucou!",
      subtitle:
        " Réseau social familial développer en fin de formation avec React et Redux en tant que dev front-end et git-master",
      imageUrl: "images/arbre.png",
      largeImageUrl: ["images/arbre.png"],
      url: "https://youtu.be/Jyh9R5xPMuM?t=462",
    },

    {
      id: 2,
      title: "API UUS-Db",
      subtitle:
        "Api développé avec Python, Flask et MongoDb gérant l'envoi de notifications pour client mobile réalisé pendent mon stage. Cette Api est aujourd'hui en production, elle est consommé par ",
      imageUrl: "images/ApiUUS-Db.png",
      largeImageUrl: ["images/ApiUUS-Db.png"],
      link: "https://www.signeco.shop",
      url: "https://api.signeco.shop:8001/v1_0/",
    },
    {
      id: 3,
      title: "Candidate discovery game",
      subtitle:
        "Jeux pour retrouver un candidat mystère, développé avec ReactJS",
      imageUrl: "images/game.png",
      largeImageUrl: ["images/game.png"],
      url: "https://mysterious-candidate-game.herokuapp.com",
    },
    {
      id: 4,
      title: "My library",
      subtitle:
        "Application Full-stack réalisé avec Next/JS et MongoDb permettant d'ajouter des livres et de les prévisualiser dans ma biblioteque virtuelle",
      imageUrl: "images/library.png",
      largeImageUrl: ["images/library.png"],
      url: "https://github.com/seb6634/My-library",
    },

    {
      id: 5,
      title: "My favorite weather",
      subtitle:
        "Widget météo React affichant en temps réel les données méteo d'une selection de mes villes",
      imageUrl: "images/My-favorite-weather.png",
      largeImageUrl: ["images/My-favorite-weather.png"],
      url: "https://my-favorite-weather.herokuapp.com",
    },
    {
      id: 6,
      title: "GitHub Api!",
      subtitle: "Api permettant de rechercher des dépots sur GitHub",
      imageUrl: "images/github-api.png",
      largeImageUrl: ["images/github-api.png"],
      url: "https://repository-github-search.herokuapp.com/",
    },
    {
      id: 7,
      title: "O-recipes",
      subtitle: "Api React consommant les ressources de Recipes-server .",
      imageUrl: "images/orecipes.png",
      largeImageUrl: ["images/orecipes-big.png"],
      url: "https://github.com/seb6634/O-recipes",
    },
    {
      id: 8,
      title: "Recipes-Server",
      subtitle: "Api NodeJS Pour O-recipes",
      imageUrl: "images/recipes-server.png",
      largeImageUrl: ["images/recipes-server.png"],
      url: "https://github.com/seb6634/Recipes-Server",
    },
    {
      id: 9,
      title: "Kanban-server",
      subtitle: "ToDoList développé avec NodeJS",
      imageUrl: "images/kanban.png",
      largeImageUrl: ["images/kanban.png"],
      url: "https://github.com/seb6634/Kanban",
    },
    {
      id: 10,
      title: "Pokedex",
      subtitle: "Application de recherche de pokémons",
      imageUrl: "images/pokedex.png",
      largeImageUrl: ["images/pokedex-big.png"],
      url: "https://github.com/seb6634/Pokedex",
    },
    {
      id: 11,
      title: "Gradient",
      subtitle: "Gradient de couleurs développer en Vanilla JS",
      imageUrl: "images/gradient.png",
      largeImageUrl: ["images/gradient-big.png"],
      url: "https://github.com/Gradient-vanilla-js",
    },
    {
      id: 12,
      title: "Kanban-front",
      subtitle: "App front pour Kanban-server",
      imageUrl: "images/kanban-front.png",
      largeImageUrl: ["images/kanban-front.png"],
      url: "https://github.com/kanban-front",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Frontend Web Developer",
        company: "Abc Company",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Frontend Web Developer",
        company: "CBA Company",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
      {
        id: 3,
        year: "2014 - 1016",
        position: "UI/UX Designer",
        company: "Example Company",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2018 - 2019",
        graduation: "Master of Science",
        university: "Abc University",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
      {
        id: 2,
        year: "2016 - 2018",
        graduation: "Bachelor of Science",
        university: "Abc University",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
      {
        id: 3,
        year: "2015 - 2016",
        graduation: "Higher Schoold Graduation",
        university: "Abc College",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
    ],
  },
  contactInfo: {
    phoneNumbers: ["+33667604101"],
    emailAddress: ["gonzalez.sebastien66@gmail.com"],
    address: "Bourg-Madame 66760 France",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
