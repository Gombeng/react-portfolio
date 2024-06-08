const urlGithub = "https://github.com/Gombeng";
const projectPath = "./images/projects";

const loadImage = (path) => {
  return new URL(path, import.meta.url).href;
};

const data = {
  home: {
    name: {
      jpy: "シャフリザル・アルダナ",
      en: "Syahrizal Ardana",
    },
    position: "Front End Developer",
    location: "AIA Singapore",
    desc: "I've been a Front-end Developer enthusiast since 2019. I do love implementing stunning UI design onto my project. This website created to present all of my works, enjoy!",
    profileImg: loadImage("./images/profile.webp"),
  },
  works: [
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
          url: loadImage(`${projectPath}/country/desktop.png`),
        },
        {
          name: "Tablet",
          url: loadImage(`${projectPath}/country/tablet.png`),
        },
        {
          name: "Mobile",
          url: loadImage(`${projectPath}/country/mobile.png`),
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
          url: loadImage(`${projectPath}/gis/desktop.png`),
        },
        {
          name: "Tablet",
          url: loadImage(`${projectPath}/gis/tablet.png`),
        },
        {
          name: "Mobile",
          url: loadImage(`${projectPath}/gis/mobile.png`),
        },
      ],
    },
  ],
};

export default data;
