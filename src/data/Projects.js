import techblogGif from '../assets/images/projects/tech-blog.gif'
import techblogImage from '../assets/images/projects/tech-blog.png'
import easyDateGif from '../assets/images/projects/project1gif.gif'
import easyDateImage from '../assets/images/projects/easy-date.png'
import gamerHubGif from '../assets/images/projects/gamerhub.gif'
import gamerHubImage from '../assets/images/projects/gamer-hub.png'
import jateImage from '../assets/images/projects/jate.png'
import jateGif from '../assets/images/projects/jate.gif'
import socialImage from '../assets/images/projects/socialmediaapi.png'
import socialGif from '../assets/images/projects/socialMediaApi.gif'
import buildImage from '../assets/images/projects/build-image.png'
import buildGif from '../assets/images/projects/build-gif.gif'

export const ProjectsArray = [
  {
    id: 1,
    name: "Build Mate",
    description:
      "An construction management app for small to mid-sized builders to help them compete in todays market.",
    githubLink: "https://github.com/daman29/build-mate",
    deployedLink: "https://build-mate-damneet.herokuapp.com/",
    image: buildImage,
    gif: buildGif,
    technologies: [
      "ReactJS",
      "MongoDB",
      "NodeJS",
      "Express Server",
      "Mongoose",
      "Styled Components",
      "JWT",
    ],
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    name: "Just Another Text Editor",
    description:
      "A full stack application (PWA) for a simple single page text editor",
    githubLink: "https://github.com/daman29/text-editor-PWA",
    deployedLink: "https://text-editor-pwa-damneet.herokuapp.com/",
    image: jateImage,
    gif: jateGif,
    technologies: [
      "Webpack",
      "NodeJS",
      "Express Server",
      "Babel",
    ],
  },
  {
    id: 6,
    name: "Social Media API",
    description: "Back end of a simple social media app built using MongoDB",
    githubLink: "https://github.com/daman29/social-network-API",
    deployedLink: "https://youtu.be/4b9upYeeLMs",
    image: socialImage,
    gif: socialGif,
    technologies: ["MongoDB", "NodeJS", "Express Server", "mongoose"],
  },
];
