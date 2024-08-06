import {
  full,
  backend,
  JAVAA,
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
  Paradox,
  UNCC,
  DL,
  Food,
  auction,
  db,
  j,
  threejs,
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
    title: "Full Stack Developer",
    icon: full,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "JAVA Developer",
    icon: JAVAA,
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
    name: "java",
    icon: j,
  },
  
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Paradox Technologies",
    icon: Paradox,
    iconBg: "#383E56",
    date: "January 2021 - July 2022",
    points: [
      "Developed and maintained applications using Java and Spring Boot, optimizing performance and enhancing reliability by 20%",
      "Designed and implemented RESTful APIs for restaurant client reservations to support front-end functionality and integration with third-party services, reducing response time by 30%.",
"Assisted in deploying applications using Kubernetes and Spinnaker on GCP, enhancing scalability and deployment efficiency.",
"Migrated legacy applications to Spring Boot, improving maintainability and leveraging modern Spring features.",
      "Conducted unit testing for Spring Boot applications, achieving 85% test coverage, solving SonarQube issues, and enhancing code quality and robustness",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "University of North Carolina at Charlotte",
    icon: UNCC,
    iconBg: "#0c7544",
    date: "August 2023 - May 2024",
    points: [
      "Facilitated lab sessions and proctored exams for approximately 200 students, ensuring academic integrity and providing detailed feedback.",
      "Assisted the professor during and post-class hours, enhancing the learning environment.",
      "Conducted dedicated doubt-clearing sessions, resolving student queries effectively.",
      " Collaborated closely with fellow teaching assistants to ensure the seamless execution of educational responsibilities.",
    ],
  },
  {
    title: "Product Manager",
    company_name: "DemocracyLab",
    icon: DL,
    iconBg: "#f8f9fa",
    date: "JULY 2024 - PRESENT ",
    points: [
      "Defined business cases, scopes, and constraints for new platform features.",
      "Managed product backlog and prioritized features based on business value and user needs.",
      "Coordinated with cross-functional teams to ensure successful product delivery.",
      "Conducted competitive analysis and identified market opportunities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with him was very efficient",
    name: "Ramanathan",
    designation: "Devloper at",
    company: "Paradox",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' success like Nimal does.",
    name: "Mohan krishna",
    designation: "founder of the",
    company: "hotel",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Nimal optimized our website, our traffic increased by 50%. We can't thank them enough for his work!",
    name: "priya mohan",
    designation: "co-founder",
    company: " of the hotel",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food Delivery Application",
    description:
      "Developed and maintained a web application with Java and Spring Boot, using PostgreSQL for data storage and retrieval. The front end was built with React to ensure a dynamic and interactive user experience. Utilized Google Cloud Platform (GCP) for hosting and managing cloud services, and implemented Apache Kafka for real-time data streaming and event-driven architecture. Deployed and scaled containerized applications with Kubernetes, and used Spinnaker for continuous delivery and deployment automation",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "kafka",
        color: "orange-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "red-text-gradient",
      },
      {
        name: "Spinnaker",
        color: "v-text-gradient",
      },
    ],
    image: Food,
    source_code_link: "https://github.com/",
  },
  {
    name: "Auction Application",
    description:
      "Implemented backend logic with Spring Boot to handle customer orders, user authentication, and restaurant management functionalities. Developed dynamic user interfaces using Angular. Created frontend interfaces with JSP, HTML, CSS, and JavaScript to ensure a seamless user experience across devices. Utilized Bootstrap for consistent styling and responsiveness. Managed project dependencies and automated the build process with Maven, streamlining development and deployment workflows.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "kafka",
        color: "orange-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "red-text-gradient",
      },
      {
        name: "Maven",
        color: "v-text-gradient",
      },
    ],
    image: auction,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hospital Database System Development",
    description:
      "Orchestrated the development of a sophisticated hospital database system with a focus on Emergency Room (ER) design, creating structured data relationships. Formulated an efficient database architecture by merging common attributes into a cohesive 'Employee' superclass. Engineered a detailed relational schema encompassing key entities such as Employees, Physicians, Nurses, and Patients, ensuring clarity in primary and foreign key relations. Implemented advanced database functionalities, including custom views and triggers, to enhance data management and integrity. Demonstrated SQL expertise through complex queries involving joins, aggregations, and nested structures for optimal data extraction. Managed transactional processes in the database, showcasing proficiency in data updates, insertions, and ongoing management.",
    tags: [
      {
        name: "Mysql",
        color: "blue-text-gradient",
      },
    ],
    image: db,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
