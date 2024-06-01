const baseUrlGithub = "https://github.com/Gombeng";
const basePathImage = "./images/project-";

export const data = {
  home: {
    name: {
      jpy: "シャフリザル・アルダナ",
      en: "Syahrizal Ardana",
    },
    position: "Front End Developer",
    location: "AIA Singapore",
    desc: "I've been a Front-end Developer enthusiast since 2019. I do love implementing stunning UI design onto my project. This website created to present all of my works, enjoy!",
    profileImg: require("./images/profile.webp"),
  },
  works: [
    {
      img: require(`${basePathImage}web-gis.png`),
      title: "Geographic Information System Website",
      desc: "Tour & Drug Spread at Tanjungpinang (dummy shp data)",
      demoUrl: "https://web-gis-react.vercel.app/",
      repoUrl: `${baseUrlGithub}web-gis-react`,
    },
    {
      img: require(`${basePathImage}moviedb.png`),
      title: "Movie DB",
      desc: "Movie DB website create using ViteJS",
      demoUrl: "https://movie-db-lake.vercel.app/",
      repoUrl: `${baseUrlGithub}movie-db`,
    },
    {
      img: require(`${basePathImage}inforsys-indonesia.png`),
      title: "Inforsys Indonesia",
      desc: "Landing page website create using AngularJS",
      demoUrl: "https://gombeng-lp-inforsys.netlify.app/",
      repoUrl: `${baseUrlGithub}inforsys`,
    },
    {
      img: require(`${basePathImage}porto.png`),
      title: "React Portfolio",
      desc: "Portfolio website created using React JS",
      demoUrl: "https://syahrizal-portfolio.vercel.app/",
      repoUrl: `${baseUrlGithub}react-portfolio`,
    },
    {
      img: require(`${basePathImage}restapi.png`),
      title: "Rest Country API",
      desc: "Website to search all the information about country all over the world!",
      repoUrl: `${baseUrlGithub}Rest-Country-API`,
      demoUrl: "https://rest-country-api-six.vercel.app/",
    },
    {
      img: require(`${basePathImage}denote.png`),
      title: "Denote",
      desc: "Application to save your brilian idea, don't forget to signup first",
      repoUrl: `${baseUrlGithub}denote-mern`,
      demoUrl: "https://denote-mern.vercel.app/signup",
    },
    {
      img: require(`${basePathImage}kitteni.png`),
      title: "Kitteni",
      desc: "Website contain all the cute cat around the world, you can see the detail too",
      repoUrl: `${baseUrlGithub}kitteni`,
      demoUrl: "https://kitteni.vercel.app/",
    },
    {
      img: require(`${basePathImage}quiz.png`),
      title: "Easely Quiz",
      desc: "Play some quick quiz game to test your inteligence",
      repoUrl: `${baseUrlGithub}easely-quiz`,
      demoUrl: "https://easely-quiz.vercel.app/",
    },
  ],
};
