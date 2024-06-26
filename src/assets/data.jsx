const urlGithub = "https://github.com/Gombeng";
const projectPath = "/images/projects";

const data = {
  home: {
    name: {
      jpy: "シャフリザル・アルダナ",
      en: "Syahrizal Ardana",
    },
    position: "Front End Developer",
    location: "AIA Singapore",
    desc: "I'm a dedicated Front-End Developer with a passion for creating user-friendly web applications since 2019. I specialize in React, which I've been mastering since 2021. Let's build something amazing together!",
    profileImg: "./images/profile.webp",
  },
  works: [
    {
      title: "Cashk",
      desc: (
        <>
          Has a slogan "Your money, simplified!" kinda cool tho, I build this
          app for tracking my personal finances, plus point I can get premium
          feature for free <br />
          (ofc need to build it on my own lol)
        </>
      ),

      repoUrl: `${urlGithub}/cashk`,
      demoUrl: "https://cashk.vercel.app/",
      techStack: [
        "react",
        "vitejs",
        "tailwindcss",
        "reactrouter",
        "eslint",
        "typescript",
      ],
      images: [
        {
          name: "Desktop",
          url: `${projectPath}/cashk/desktop.png`,
        },
        {
          name: "Tablet",
          url: `${projectPath}/cashk/tablet.png`,
        },
        {
          name: "Mobile",
          url: `${projectPath}/cashk/mobile.png`,
        },
      ],
    },
    {
      title: "Denote",
      desc: "Pour all your briliant idea to a note, so you can execute later. Actually this is my first Fullstack project that I build when in college",
      repoUrl: `${urlGithub}/fe-denote`,
      demoUrl: "https://denote-mern.vercel.app/",
      techStack: [
        "react",
        "express",
        "mongoose",
        "mongodb",
        "nodejs",
        "javascript",
        "nodemon",
      ],
      images: [
        {
          name: "Desktop",
          url: `${projectPath}/denote/desktop.png`,
        },
        {
          name: "Tablet",
          url: `${projectPath}/denote/tablet.png`,
        },
        {
          name: "Mobile",
          url: `${projectPath}/denote/mobile.png`,
        },
      ],
    },
    {
      title: (
        <>
          Personal Web Portfolio <br />
          (this web lol)
        </>
      ),
      desc: "My personal website to showcases all of my projects, at first this web using CRA & styled components, migrating to vite now.",
      repoUrl: `${urlGithub}/react-portfolio`,
      demoUrl: "https://syahrizal-portfolio.vercel.app/",
      techStack: [
        "react",
        "sass",
        "reactrouter",
        "eslint",
        "tailwindcss",
        "vitejs",
        "javascript",
      ],
      images: [
        {
          name: "Desktop",
          url: `${projectPath}/porto/desktop.png`,
        },
        {
          name: "Tablet",
          url: `${projectPath}/porto/tablet.png`,
        },
        {
          name: "Mobile",
          url: `${projectPath}/porto/mobile.png`,
        },
      ],
    },
    {
      title: "Explore the world",
      desc: "Website to search all the information about country all over the world!",
      repoUrl: `${urlGithub}/fm-rest-countries-api`,
      demoUrl: "https://fm-rest-countries-api-seven.vercel.app/",
      techStack: [
        "react",
        "tailwindcss",
        "vitejs",
        "html5",
        "css3",
        "javascript",
      ],
      images: [
        {
          name: "Desktop",
          url: `${projectPath}/country/desktop.png`,
        },
        {
          name: "Tablet",
          url: `${projectPath}/country/tablet.png`,
        },
        {
          name: "Mobile",
          url: `${projectPath}/country/mobile.png`,
        },
      ],
    },
    {
      title: "Geographic information system Website",
      desc: "Data visiualization about drugs & tourist spread at Tanjungpinang.",
      repoUrl: `${urlGithub}/web-gis-react`,
      demoUrl: "https://web-gis-react.vercel.app/",
      techStack: ["react", "vitejs", "css3", "javascript"],
      images: [
        {
          name: "Desktop",
          url: `${projectPath}/gis/desktop.png`,
        },
        {
          name: "Tablet",
          url: `${projectPath}/gis/tablet.png`,
        },
        {
          name: "Mobile",
          url: `${projectPath}/gis/mobile.png`,
        },
      ],
    },
  ],
};

export default data;
