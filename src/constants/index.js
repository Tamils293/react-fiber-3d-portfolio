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
  mongodb,
  git,
  figma,
  docker,
  next,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  hackerNews,
  jobit,
  tripguide,
  threejs,
  Perpetuuiti,
  MMP,
  HiBro,
  Deloitte,
  tindog,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Wordpress Developer",
    icon: backend,
  },
  {
    title: "Technical Reviewer",
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
    name: "nextjs",
    icon: next,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Development Intern",
    company_name: "Magic Menporul Software Solutions Private Limited",
    icon: MMP,
    iconBg: "#383E56",
    date: "Jun 2020 - Feb 2021",
    points: [



      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Created two projects: \"Hibro Home Services\" and \"Propdealz,\" a real estate registration app, both developed using React.",

    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Magic Menporul Software Solutions Private Limited",
    icon: MMP,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Jun 2021",
    points: [
      "Continued development and maintenance of React-based web applications.",
      "Engaged in collaborative efforts with diverse teams for product enhancements.",
      "Contributed to the expansion of previously developed projects, ensuring quality and functionality.",

    ],
  },
  {
    title: "UI Developer",
    company_name: "Perpetuuiti Technosoft PTE",
    icon: Perpetuuiti,
    iconBg: "#383E56",
    date: "Jun 2021 - Jun 2023",
    points: [
      "Instrumental in crafting user interfaces for \"Continuity Patrol,\" a DRM-focused application.",
      "Ensured seamless UI experiences, focusing on responsive design and cross-browser compatibility",
      "Extended React.js expertise to elevate the platform's visual and functional aspects.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior UI Developer",
    company_name: "Perpetuuiti Technosoft PTE",
    icon: Perpetuuiti,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
  title: "Consultant (Full Stack Developer)",
  company_name: "Deloitte",
  icon: Deloitte,
  iconBg: "#fff",
  date: "Feb 2024 - Present",
  points: [
    "Designing and developing scalable web applications using React.js, TypeScript, and Node.js for enterprise clients in the technology and pharmaceutical domains.",
    "Building and optimizing internal platforms for major clients including Pfizer, Amgen, Moody’s, and Eli Lilly.",
    "Collaborating closely with cross-functional teams to deliver high-performance, secure, and maintainable full-stack solutions.",
    "Integrating REST and GraphQL APIs, improving system reliability and frontend performance across large datasets.",
    "Contributing to reusable component libraries and enforcing code quality through code reviews and testing best practices."
  ],
},
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hacker News",
    description:
      " \"Hacker News\" is a site for tech and business news by Y Combinator. The Hacker News Replica, built with React and Tailwind CSS, offers tech fans a familiar place to discuss the latest in a cool way.It's like a twin of the famous Hacker News by Y Combinator ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: hackerNews,
    source_code_link: "https://github.com/Tamils293/Hacker-News",
  },
  {
    name: "Hibro HomeServices",
    description:
      "\"Hibro HomeServices,\" built with React, is a comprehensive platform providing various household services. Users enjoy an easy-to-use interface for scheduling and managing home tasks. HiBro offers quality home services in Chennai.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: HiBro,
    source_code_link: "https://hibroservices.com/",
  },
  {
    name: "TinDog",
    description:
      "\"Tindog\" is a playful project - think Tinder for dogs. Created with HTML, CSS, and Bootstrap for practice, it's a fun way to connect dogs and their owners.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tindog,
    source_code_link: "https://github.com/Tamils293/tindog",
  },
];

export { services, technologies, experiences, testimonials, projects };
