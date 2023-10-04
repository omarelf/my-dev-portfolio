import { BooleanKeyframeTrack } from "three";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  angular,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  berexia,
  dba,
  monamialbert,
  agridata,
  upwork,
  zr,
  airphone
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Business Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ecommerce Hustler",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "angular",
    icon: angular,
  },

];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Berexia",
    icon: berexia,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Development of basic components.",
      "Development of new features in different application packages.",
      "Fix the bugs of the Inuring and Calibration part.",
      "Performing unit tests.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Tools: Angular Ngrx RxJS JWT MySQL Ng-Zorro Azure Git Agile JSPlumb Ag-Grid"
    ],
  },
  {
    title: "FULLSTACK JAVASCRIPT ENGINEER",
    company_name: "Digital Brains Agency",
    icon: dba,
    background: "black",
    iconBg: "#E6DEDD",
    date: "Jan 2022 - July 2022",
    points: [
      "Development of basic components",
      "Development of new features in different application packages",
      "Fix the bugs of the Inuring and Calibration part",
      "Performing unit tests",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Tools: Angular Ngrx RxJS JWT MySQL Ng-Zorro Azure Git Agile JSPlumb Ag-Grid"
    ],
  },
  { 
    title: "Upwork Developer",
    company_name: "Upwork",
    icon: upwork,
    background: "white",

    iconBg: "#383E56",
    date: "Feb 2020 - Present",
    points: [
      "Developing and maintaining Ecommerce Stores using React.js and Shopify technologies.",
      "Participating in adding new features to ship high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating and contributing in Supply Chain processes.",
    ],
  },
  {
    title: "Shopify Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2020 - Present",
    points: [
      "Developing and maintaining Ecommerce Stores using React.js and Shopify technologies.",
      "Participating in adding new features to ship high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating and contributing in Supply Chain processes.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "AgriData Consulting",
    icon: agridata,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Dec 2021",
    points: [
      "ERP development designed exclusively for farm management.",
      "Develop new features.",
      "Develop basic components.",
      "Tools: Angular NodeJS JWT MongoDB Express PrimeNg Git MySQL Agile"

      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Omar is a true team player, always willing to collaborate with colleagues, share knowledge, and mentor junior developers.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Omar possesses a unique combination of technical prowess and problem-solving skills. ",
    name: "Chris Damien",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Omar optimized our website, our traffic increased by 30%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mon Ami Albert",
    description:
      "Web-based platform that allows users to search, book, and manage meeting with teachers, providing a convenient and efficient solution for e-learning needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Nest",
        color: "#ef4444",
      },
    ],
    content_fit:'fill',
    image: monamialbert,
    source_code_link: "https://monamialbert.com/",
  },
  {
    name: "07zr Search Engine",
    description:
      "Web application that enables users to seek for european automative purchasing by different criterias . A search engine for the 07zr platform, with the integration of Elasticsearch and Kibana.",
    tags: [
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Elasticsearch",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Kibana",
        color: "white-text-gradient",
      },
    ],
    image: zr,
    source_code_link: "https://07zr.com/fr",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-commerce Airphons Platform ",
    description:
      "e-commerce application with modern design and animations, the ability to add and edit products on the go using a Sanity, all advanced cart, and checkout functionalities, and most importantly, the complete integration with Stripe for real payments.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "white-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: airphone,
    source_code_link: "https://github.com/omarelf/ecommerce-sanity",
  },
];

export { services, technologies, experiences, testimonials, projects };
