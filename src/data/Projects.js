import techblogGif from '../assets/images/projects/tech-blog.gif'
import techblogImage from '../assets/images/projects/tech-blog.png'
import easyDateGif from '../assets/images/projects/project1gif.gif'
import easyDateImage from '../assets/images/projects/easy-date.png'
import gamerHubGif from '../assets/images/projects/gamerhub.gif'
import gamerHubImage from '../assets/images/projects/gamer-hub.png'

export const ProjectsArray = [
  {
    name: "GamerHub",
    description:
      "A full stack application to help gamers find like minded teammates.",
    githubLink: "https://github.com/HannahStampke/GamerHub",
    deployedLink: "https://gamer-hub-group1.herokuapp.com/",
    image: gamerHubImage,
    gif: gamerHubGif,
    technologies: [
      "MySQL",
      "Handlebars",
      "NodeJS",
      "Express Server",
      "Sequelize",
      "Bootstrap",
      "Sass",
    ],
  },
  {
    name: "Easy Date",
    description:
      "A front end application utilising web APIs to help users with social encounters.",
    githubLink: "https://github.com/MattDRyan/Easy-Date",
    deployedLink: "https://mattdryan.github.io/Easy-Date/",
    image: easyDateImage,
    gif: easyDateGif,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Google Maps API",
      "Movies DB API",
      "TailwindCSS",
    ],
  },
  {
    name: "Tech Blog",
    description: "A full stack CMS style tech blog",
    githubLink: "https://github.com/daman29/tech-blog",
    deployedLink: "https://tech-blog-damneet.herokuapp.com/",
    image: techblogImage,
    gif: techblogGif,
    technologies: [
      "MySQL",
      "Handlebars",
      "NodeJS",
      "Express Server",
      "Sequelize",
      "Bootstrap",
    ],
  },
  {
    name: "Just Another Text Editor",
    description:
      "A full stack application (PWA) for a simple single page text editor",
    githubLink: "https://github.com/daman29/text-editor-PWA",
    deployedLink: "https://text-editor-pwa-damneet.herokuapp.com/",
    image: "",
    gif: "",
    technologies: [
      "Webpack",
      "NodeJS",
      "Express Server",
      "Babel",
    ],
  },
  {
    name: "Social Media API",
    description: "Back end of a simple social media app built using MongoDB",
    githubLink: "https://github.com/daman29/social-network-API",
    deployedLink: "https://youtu.be/4b9upYeeLMs",
    image: "",
    gif: "",
    technologies: ["MongoDB", "NodeJS", "Express Server", "mongoose"],
  },
  {
    name: "Team Profile Generator",
    description:
      "A pure JavaScript NodeJS terminal app to generate a team profile as a styled webpage",
    githubLink: "https://github.com/daman29/Team-Profile-Generator",
    deployedLink: "https://github.com/daman29/Team-Profile-Generator/blob/main/dist/demo.mp4",
    image: "",
    gif: "",
    technologies: ["Inquirer", "NodeJS", "Bootstrap"],
  },
];
