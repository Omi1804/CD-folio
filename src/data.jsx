import {
  FaBriefcase,
  FaCode,
  FaEnvelopeOpen,
  FaFolderOpen,
  FaGraduationCap,
  FaHome,
  FaUser,
  FaGithub,
} from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import { FiExternalLink, FiFileText, FiUser } from "react-icons/fi";
import { HiCode } from "react-icons/hi";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";
import Work4 from "./assets/project-4.png";
import Work5 from "./assets/project-5.png";
import Work6 from "./assets/project-6.png";
import Work7 from "./assets/project-7.png";
import Work8 from "./assets/project-8.png";
import Work9 from "./assets/project-9.png";
import Work10 from "./assets/project-10.png";
import Work11 from "./assets/project-11.png";
import Work12 from "./assets/project-12.png";
import Work13 from "./assets/project-13.png";
import Work14 from "./assets/project-14.png";
import Work15 from "./assets/project-15.png";
import Work16 from "./assets/project-16.png";
import Work17 from "./assets/project-17.png";
import Work18 from "./assets/project-18.png";
import Work19 from "./assets/project-19.png";
import Work20 from "./assets/project-20.png";

import Theme4 from "./assets/blue.png";
import Theme3 from "./assets/blueviolet.png";
import Theme5 from "./assets/goldenrod.png";
import Theme9 from "./assets/green.png";
import Theme6 from "./assets/magenta.png";
import Theme8 from "./assets/orange.png";
import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme10 from "./assets/yellow.png";
import Theme7 from "./assets/yellowgreen.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Name : ",
    description: "Om Nigam",
  },

  {
    id: 2,
    title: "Age : ",
    description: "22 Years",
  },

  {
    id: 3,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 4,
    title: "Address : ",
    description: "Ghaziabad",
  },

  {
    id: 5,
    title: "Phone : ",
    description: "+91 7753951732",
  },

  {
    id: 6,
    title: "Email : ",
    description: "om2021064@akgec.ac.in",
  },
];

export const stats = [
  {
    id: 1,
    no: "40+",
    title: "Web Development <br /> Projects",
  },

  {
    id: 2,
    no: "4+",
    title: "Stars <br /> Codeshef Coder",
  },

  {
    id: 3,
    no: "20+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "2+",
    title: " Years <br /> Experience",
  },
];

export const resume = [
  {
    id: 101,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 / JUL",
    title: "Full Stack Developer Intern <span> The Adz Plug </span>",
    desc: "Led the development and deployment of several full-stack web applications, enhancing user experience and business functionality. <br/><br/>  Implemented performance optimizations, achieving a 30% improvement in page load times. <br/><br/> Ensured high availability and security standards in deploying websites to production environments.",
  },
  {
    id: 100,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 / MAY",
    title: "Web Developer And Designer Intern <span> Simplbyte </span>",
    desc: "Pioneered the design and development of several user-centric websites, leveraging modern frameworks and cross-functional collaboration. Enhanced UI/UX, resulting in a 5% increase in user engagement and reach.",
  },
  {
    id: 103,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 / SEP",
    title: "Amazon Web Services - Associate Solution Architect",
    desc: "Excelled in mastering AWS services at the Solution Architect level, bringing transformative solutions to life. Successfully integrated cutting-edge AWS services into our projects, amplifying their efficiency and scalability.",
  },

  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 / APRIL",
    title: "Winner of Inter College Blockchain Hackathon<span> AKGEC </span>",
    desc: "Successfully secured 1st rank on hackathon organised by AKGEC in blockchain domain",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 / MARCH",
    title: "Top 5 RunnerUP<span> Rajasthan Hackathon </span>",
    desc: "Achieved a top 5 ranking in a hackathon by contributing to a blockchain project",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 / 08 - 2022 / 12",
    title: "Data Structure & Algorithm <span> Internship </span>",
    desc: "From AKGEC skills I have gained Internship opportunity to gain hands-on experience in implementing and optimizing data structures and algorithms for efficient problem-solving.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020 - 2024",
    title:
      "Bachelor of Technology <span> Ajay Kumar Garg Engineering College </span>",
    desc: "Currently in 3rd Year of college",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019",
    title:
      "Higher Secondary <span> Dr. Virendra Swarup Education Centre </span>",
    desc: "Percentage - 87%",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017",
    title: "High School <span> Dr. Virendra Swarup Education Centre</span>",
    desc: "CGPA - 10/10",
  },
  {
    id: 21,
    category: "projects",
    icon: <HiCode />,
    year: " MERN, Typescript",
    title: `<a href="https://github.com/Omi1804/Course_Selling_App" target='blank' style="color: inherit; text-decoration: none;">COURSE LELO  <span> Dynamic Full Stack Course Selling Platform</span></a>`,
    desc: `• Developed "Course Lelo," a cutting-edge full stack web application for course selling and management.<br><br> 
    • Utilized React for a responsive frontend; Node.js backend ensures robust performance and scalability.<br><br> 
    • Employed TypeScript for type safety, ensuring a reliable and maintainable web application environment.<br><br>
    • Incorporated Zod for rigorous validation and JWT for secure user authentication processes.<br><br>
    • Leveraged Recoil for advanced state management, offering a seamless and intuitive user experience.
    `,
  },

  {
    id: 8,
    category: "projects",
    icon: <HiCode />,
    year: "MERN",
    title: `<a href="https://github.com/Omi1804/dall-e" target='blank' style="color: inherit; text-decoration: none;">AI ArtHUB <span> A Full Stack AI-Powered Art Showcase Platform</span></a>`,
    desc: `• A platform where users generate unique images using DALL-E API and share them with others in a vibrant community of creators. <br><br> 
    • Explore a diverse collection of AI-generated images, each accompanied by the prompt that inspired its creation.<br><br> 
    • Built using the MERN (MongoDB, Express.js, React, Node.js) stack, ensuring a robust and scalable foundation for the platform. <br><br>
    • Leveraging the power of MongoDB for flexible and efficient storage of user data, including generated images, prompts, and user profiles.<br><br>
    • Implements advanced search and filtering functionalities to help users find desired Image efficiently.<br><br>
    • Inspire others by sharing your own prompts and the stunning images they generate, fostering a dynamic cycle of creative exchange.
    .`,
  },
  {
    id: 7,
    category: "projects",
    icon: <HiCode />,
    year: "MERN",
    title:
      '<a href="https://github.com/Omi1804/E-commerse" target=`blank` style="color: inherit; text-decoration: none;">Ø•M•Ī <span> A Fully Dynamic E-Commerse Site</span></a>',
    desc: `• Fully Dynamic E-commerce website built using React for frontend and Node Express for backend, with MongoDB for data storage. <br><br> 
    • Robust login and registration system implemented using <strong>JWT</strong> (JSON Web Tokens) for secure authentication.<br><br> 
    • Implements an intuitive '<strong>Add to Cart</strong>' functionality, allowing users to easily add desired products for future purchase. <br><br>
    • Utilizes MongoDB to store and manage all data, including product listings, user profiles, and order details.<br><br>
    • Implements advanced search and filtering functionalities to help users find desired products efficiently.<br><br>
    • Implements responsive design principles, ensuring the website looks and functions well across different devices and screen sizes.`,
  },
  {
    id: 18,
    category: "projects",
    icon: <HiCode />,
    year: "MERN",
    title:
      '<a href="https://github.com/Omi1804/Workout-buddy" target=`blank` style="color: inherit; text-decoration: none;">WORKOUT PLANNER<span> A Mern application to manage and tracks workouts</span></a>',
    desc: `•  Experience a cutting-edge, fully MERN (MongoDB, Express.js, React.js, Node.js) stack application designed for efficient workout management and tracking. <br><br> 
    • Secure your data with robust authorization and authentication mechanisms, powered by JWT (JSON Web Tokens), ensuring only authorized users can access and modify their workout information..<br><br> 
    • Each user enjoys their own personalized workout database, empowering them to store, organize, and track their unique fitness journey with ease.<br><br>
    • Utilizes MongoDB to store and manage all data, including product listings, user profiles, and order details.<br><br>`,
  },

  {
    id: 19,
    category: "projects",
    icon: <HiCode />,
    year: "REACT",
    title:
      '<a href="https://github.com/Omi1804/Buddy_excerise" target=`blank` style="color: inherit; text-decoration: none;">EXERCISE BUDDY<span>An Interactive And Immersive Gym Guide</span></a>',
    desc: `• Experience a dynamic React project with Material-UI integration, leveraging Rapid API for a vast exercise collection.<br><br> 
      • Immerse yourself in an impressive and visually appealing interface that beautifully showcases the fetched exercises, making it easy to browse and select from the available options.<br><br> 
      • Empower users with a powerful search functionality that allows them to quickly find specific exercises based on their preferences, ensuring a personalized and efficient workout experience.`,
  },
  {
    id: 9,
    category: "projects",
    icon: <HiCode />,
    year: "REACT",
    title:
      '<a href=" https://github.com/Omi1804/pwa-Quizz" target=`blank` style="color: inherit; text-decoration: none;">QUIZZICAL <span> Multiple Choice Question Exam Portal</span></a>',
    desc: `• A dynamic online portal, offers captivating multiple-choice quizzes to test your general IQ and doubles as a Progressive Web App (PWA) for a seamless mobile experience.<br><br> 
    •Explore the depths of your intellectual prowess with QUIZZICAL's captivating selection of diverse and challenging quizzes.<br><br> 
    •Test your intellectual capabilities with QUIZZICAL's diverse range of multiple-page layout, receiving immediate feedback and correct answers on the final page.`,
  },

  {
    id: 20,
    category: "projects",
    icon: <HiCode />,
    year: "REACT",
    title:
      '<a href=" https://github.com/Omi1804/DisneyPlus-Clone" target=`blank` style="color: inherit; text-decoration: none;">DisneyPlus Clone <span>Disney-inspired clone with Firebase authentication and Styled Components.</span></a>',
    desc: `•  Immerse yourself in a captivating Disney clone multi-page project that replicates the magical experience of the original Disney platform.<br><br> 
    •  Harness the power of Firebase, a comprehensive platform, for seamless integration of authentication and authorization features, ensuring secure user access and data management.<br><br> 
    • Allow users to create accounts, log in, and authenticate their identities, enabling personalized experiences and access to exclusive features.<br><br> 
    • Utilize the versatility of Styled Components, a popular CSS-in-JS library, to create stunning and visually appealing user interfaces, reminiscent of Disney's enchanting aesthetics.`,
  },

  {
    id: 10,
    category: "projects",
    icon: <HiCode />,
    year: "REACT",
    title:
      '<a href="https://github.com/Omi1804/Speeder" target=`blank` style="color: inherit; text-decoration: none;">Speeder <span> Immersive Typing Speed Test Site</span></a>',
    desc: `• Engaging speed typing test game developed using React for a dynamic and interactive user experience.<br><br>
    • Measures and displays the user's typing speed and accuracy in real-time during the game.<br><br>
    • Provides a countdown timer to add a sense of urgency and challenge to the typing test.`,
  },

  {
    id: 11,
    category: "projects",
    icon: <HiCode />,
    year: "REACT",
    title:
      ' <a href="https://github.com/Omi1804/tenzies" target=`blank` style="color: inherit; text-decoration: none;">TENZIES <span> A Popular Japanese Game</span></a>',
    desc: `• Tenzies game developed using React, providing a fun and engaging digital adaptation of the popular dice game.<br><br>
    • Utilizes interactive dice rolling animations and responsive design to enhance the visual appeal and user experience.<br><br>
    • Includes interactive scoreboards and game statistics to track and display player progress and achievements.`,
  },

  {
    id: 12,
    category: "projects",
    icon: <HiCode />,
    year: "NODE",
    title:
      ' <a href="https://github.com/Omi1804/Admin-dashbord" target=`blank` style="color: inherit; text-decoration: none;">ADMIN MANAGER <span> A User Management System</span></a>',
    desc: `• User Management System developed using Node Express and MongoDB for efficient CRUD operations on user details.<br><br>
    • Utilizes MongoDB to store and manage user data, ensuring scalability and reliability.<br><br>
    • Provides an interactive user interface to view, create, update, and delete user records.`,
  },

  {
    id: 13,
    category: "projects",
    icon: <HiCode />,
    year: "NODE",
    title:
      '<a href="https://github.com/Omi1804/Full-Modular-Website" target=`blank` style="color: inherit; text-decoration: none;">MODULAR WEBSITE<span> A Fully Modular & Dynamic Website</span></a>',
    desc: `• Experience the power of a fully modular and dynamic website, where every aspect, from captivating images to rich data, is seamlessly stored and managed in MongoDB.<br><br>
    • Empowering website administrators with a user-friendly content management system that enables real-time updates and modifications, instantly reflecting changes on the website.<br><br>
    • Embrace the limitless possibilities of customization as our website architecture offers a modular design, empowering you to add and personalize components and sections effortlessly.`,
  },

  {
    id: 14,
    category: "projects",
    icon: <HiCode />,
    year: "JAVASCRIPT",
    title:
      '<a href="https://github.com/Omi1804/Omiflix" target=`blank` style="color: inherit; text-decoration: none;">OMIFLIX<span> A Movie Streaming Platform</span></a>',
    desc: `• Explore a vast collection of movies categorized into different genres, offering an extensive range of choices to suit every taste.<br><br>
    • Immerse yourself in a visually stunning website, crafted with HTML, CSS, and JavaScript, that replicates the sleek and modern aesthetics of Netflix.<br><br>
    •Discover new movies with ease as the platform intelligently organizes content into various categories, such as action, comedy, drama, and more.`,
  },

  {
    id: 15,
    category: "projects",
    icon: <HiCode />,
    year: "JAVASCRIPT",
    title:
      ' <a href="https://modern-digitalmedia-website.netlify.app" target=`blank` style="color: inherit; text-decoration: none;">DIGITAL MEDIA WEBSITE<span> A Modern Digital Media Website</span></a>',
    desc: `•Elevate your digital media experience with a cutting-edge website that combines HTML, CSS, and JavaScript to create mesmerizing parallax effects, adding depth and interactivity.<br><br>
    • Engage with a modern and dynamic user interface that uses parallax effects to create a sense of movement and intrigue, enticing visitors to explore further.`,
  },

  {
    id: 16,
    category: "projects",
    icon: <HiCode />,
    year: "JAVASCRIPT",
    title:
      ' <a href="https://music-player-fun.netlify.app" target=`blank` style="color: inherit; text-decoration: none;">AUDIO MEDIA PLAYER<span> A Modern Designed Audio Media Player</span></a>',
    desc: `•Discover and play your favorite songs from a vast music library, providing an extensive collection of tracks, albums, and playlists.<br><br>
    • Experience smooth and uninterrupted playback, with features such as play, pause, skip, shuffle, and repeat, enhancing your music listening experience.`,
  },

  {
    id: 17,
    category: "projects",
    icon: <HiCode />,
    year: "SASS",
    title:
      '<a href=" https://classical-portfolio.netlify.app" target=`blank` style="color: inherit; text-decoration: none;">CLASSIC PORTFOLIO<span> A Classical Multipage Portfolio</span></a>',
    desc: `• Modular Design: One of the key advantages of using SASS (Syntactically Awesome Style Sheets) for creating a multi-page portfolio is the ability to implement a modular design. <br><br>
    • SASS provides variables and mixins, which allow you to define and reuse common styles throughout your portfolio.`,
  },
];

export const skills = [
  {
    id: 4,
    title: "React",
    percentage: "95",
  },
  {
    id: 2,
    title: "JavaScript",
    percentage: "89",
  },
  {
    id: 5,
    title: "NextJS",
    percentage: "85",
  },
  {
    id: 7,
    title: "Typescript",
    percentage: "90",
  },
  {
    id: 3,
    title: "Tailwind Css",
    percentage: "90",
  },
  {
    id: 6,
    title: "Node",
    percentage: "95",
  },
  {
    id: 8,
    title: "MongoDB",
    percentage: "85",
  },

  {
    id: 1,
    title: "MySql",
    percentage: "90",
  },

  {
    id: 9,
    title: "JWT",
    percentage: "85",
  },

  {
    id: 10,
    title: "AWS",
    percentage: "90",
  },
  {
    id: 11,
    title: "Docker",
    percentage: "95",
  },
  {
    id: 12,
    title: "CI / CD",
    percentage: "80",
  },
];

export const portfolio = [
  {
    id: 20,
    img: Work20,
    title: "COURSE LELO",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Website : ",
        desc: `<a href="https://github.com/Omi1804/Course_Selling_App" target='blank'>https://github.com/Omi1804/Course_Selling_App</a>`,
      },
    ],
  },
  {
    id: 2,
    img: Work16,
    title: "AI ArtHUB",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Website : ",
        desc: `<a href="https://ai-image-fun.netlify.app" target='blank'>https://ai-image-fun.netlify.app</a>`,
      },
    ],
  },

  {
    id: 1,
    img: Work1,
    title: "Ø•M•Ī",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Website : ",
        desc: `<a href="https://omierse.netlify.app" target='blank'>https://omierse.netlify.app</a>`,
      },
    ],
  },

  {
    id: 17,
    img: Work17,
    title: "EXERCISE BUDDY",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Website : ",
        desc: `<a href="https://exercises-buddy.netlify.app" target='blank'>https://exercises-buddy.netlify.app</a>`,
      },
    ],
  },

  {
    id: 18,
    img: Work18,
    title: "DISNEY CLONE ",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Website : ",
        desc: `<a href="https://disneyplus-clone-6f5aa.web.app" target='blank'>https://disneyplus-clone-6f5aa.web.app</a>`,
      },
    ],
  },
  {
    id: 19,
    img: Work19,
    title: "WORKOUT PLANNER ",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Website : ",
        desc: `<a href="https://workout-helperfun.netlify.app/" target='blank'>https://workout-helperfun.netlify.app/</a>`,
      },
    ],
  },

  {
    id: 3,
    img: Work2,
    title: "Quizzical",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://quizzical-fun.netlify.app">https://quizzical-fun.netlify.app</a>',
      },
    ],
  },

  {
    id: 4,
    img: Work3,
    title: "Speeder",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://speed-typing-fun.netlify.app">https://speed-typing-fun.netlify.app</a>',
      },
    ],
  },

  {
    id: 5,
    img: Work4,
    title: "TENZIES",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://tenzies-fungame.netlify.app/">https://tenzies-fungame.netlify.app/</a>',
      },
    ],
  },

  {
    id: 6,
    img: Work5,
    title: "Modern UI Notes App",
    details: [
      {
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://notetakingfun.netlify.app">https://notetakingfun.netlify.app</a>',
      },
    ],
  },

  {
    id: 7,
    img: Work6,
    title: "Meme Generator",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://meme-generatorfun.netlify.app">https://meme-generatorfun.netlify.app</a>',
      },
    ],
  },

  {
    id: 8,
    img: Work7,
    title: "Admin Manager",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://admin-dashbord.onrender.com">https://admin-dashbord.onrender.com</a>',
      },
    ],
  },

  {
    id: 9,
    img: Work8,
    title: "MODULAR WEBSITE",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://full-modular-webiste.onrender.com">https://full-modular-webiste.onrender.com</a>',
      },
    ],
  },
  {
    id: 10,
    img: Work9,
    title: "Classical PortFolio",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://classical-portfolio.netlify.app">https://classical-portfolio.netlify.app</a>',
      },
    ],
  },

  {
    id: 11,
    img: Work10,
    title: "Digital Media Website",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://modern-digitalmedia-website.netlify.app">https://modern-digitalmedia-website.netlify.app</a>',
      },
    ],
  },

  {
    id: 12,
    img: Work11,
    title: "An Intractive Game",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://snake-nfun.netlify.app">https://snake-nfun.netlify.app</a>',
      },
    ],
  },

  {
    id: 13,
    img: Work12,
    title: "AUDIO MEDIA PLAYER",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://music-nfun.netlify.app">https://music-nfun.netlify.app</a>',
      },
    ],
  },

  {
    id: 14,
    img: Work13,
    title: "OMIFLIX",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://omiflix.netlify.app">https://omiflix.netlify.app</a>',
      },
    ],
  },

  {
    id: 15,
    img: Work14,
    title: "Modern UI/UX Website",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: '<a target=`blanck` href="https://modern-sitefun.netlify.app">https://modern-sitefun.netlify.app</a>',
      },
    ],
  },

  {
    id: 16,
    img: Work15,
    title: "News Portal",
    details: [
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://news-site.netlify.app",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
