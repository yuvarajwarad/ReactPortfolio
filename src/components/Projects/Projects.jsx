import React, { useState } from 'react';

// Sample project data with short and long descriptions and skills
const projects = [
  {
    title: 'Gro Pro',
    shortDescription: 'Developed GrowPro using Next.js and React.js, integrating Strapi for seamless content management in the health insurance sector.',
    longDescription: 'GrowPro: Empowering Agents for Customized Creations: Developed the GrowPro app, designed for agents to craft personalized posters and presentations. The app, built using Next.js and React.js, offers a seamless and interactive platform for users to create dynamic marketing materials.Effortless Content Management with Strapi: Seamlessly integrated Strapi for content management, enabling agents in the health insurance sector to effortlessly manage and update vital information for the GrowPro app.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'NextJs',
      'Git',
      'Webpack',
      'Bootstrap',
      'MUI',
      'Strapi',
      'Jest',
      'VS Code',
      'jira'
    ],
    image: '/projects/GrowPro1.png',
    link: '#'
  },
  {
    title: 'Gaia',
    shortDescription: 'Gaia is a tool for agents to manage key-value pairs with descriptions.',
    longDescription: 'Gaia is a powerful tool developed for our agents to efficiently store and manage key-value pairs along with descriptive fields for various purposes. This project offers a seamless interface where users can save essential data and retrieve it through an intuitive search functionality, based on criteria such as date, key, and value.Throughout the development of Gaia, I was involved in designing key components, implementing various APIs, and closely collaborating with the backend team. This experience enriched my understanding of team collaboration, efficient API integration, and designing user-centric features. Gaia continues to evolve with robust features that enhance data handling and search capabilities for agents.',
    skills:  [
      'HTML',
      'CSS',
      'JavaScript',
      'NextJs',
      'Git',
      'Webpack',
      'Bootstrap',
      'MUI',
      'Strapi',
      'Jest',
      'VS Code',
      'jira'
    ],
    image: '/projects/Gaia.jpeg',
    link: '#'
  },
  {
    title: 'GenPro',
    shortDescription: 'Developed the GenPro project in the health insurance sector, providing users with real-time answers and feedback on their inquiries using advanced natural language processing.',
    longDescription:'I worked on the GenPro project within our organization in the health insurance sector, designed to provide users with valuable answers and feedback on their inquiries related to our services. This project is akin to ChatGPT, utilizing advanced natural language processing to understand and respond to user questions effectively. I played a key role in developing the backend architecture and integrating machine learning algorithms that enhance the systems ability to deliver accurate and relevant information. The user-friendly interface allows individuals to engage in real-time conversations, ensuring they receive the guidance they need regarding health insurance. Through this project, I gained significant experience in AI integration, user experience design, and working collaboratively with cross-functional teams to refine the solution.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'NextJs',
      'Git',
      'Webpack',
      'Bootstrap',
      'MUI',
      'Strapi',
      'Jest',
      'VS Code',
      'jira'
    ],
    image: '/projects/GenPro.jpeg',
    link: '#'
  },
  {
    title: 'Amazone Clone',
    shortDescription: 'Built an Amazon clone using the MERN stack and Next.js, featuring product browsing, cart management, and secure payments.',
    longDescription: 'In my Amazon clone project, I utilized the MERN stack (MongoDB, Express.js, React.js, Node.js) combined with Next.js for a full-stack e-commerce experience. This project mirrors the core functionality of Amazon, allowing users to browse products, add items to the cart, and complete purchases through a seamless checkout process. It includes authentication with JWT for secure user login and registration, product management, and a dynamic search function powered by MongoDB for efficient product querying. By incorporating Next.js, I enhanced server-side rendering and optimized performance for a faster user experience. This project gave me hands-on experience in building a scalable e-commerce platform, managing state with Redux, and integrating payment gateways like Stripe.',
    skills:  [
      'HTML',
      'CSS',
      'JavaScript',
      'Git',
      'Webpack',
      'Bootstrap',
      'MUI',
      'VS Code',
      "Nodejs",
      'Express.js',
      'mongoDb',
    ],
    image: '/projects/AmazoneClone.png',
    link: '#'
  },
  {
    title: 'Nextjs portfolio',
    shortDescription: 'Built a Next.js portfolio site with a dynamic, responsive design to showcase my projects and skills, utilizing server-side rendering for optimized performance.',
    longDescription: 'I developed a personal portfolio site using Next.js to showcase my projects, skills, and experience in web development. The portfolio features a dynamic and responsive design, highlighting my expertise across various technologies including React.js, Node.js, and JavaScript. With Next.js, I leveraged server-side rendering for improved SEO and fast load times, ensuring a smooth user experience. The site includes sections like an about page, project gallery, and contact form, all seamlessly integrated for easy navigation. This project enhanced my skills in UI/UX design, component-driven development, and deploying scalable applications with optimized performance.',
    skills:  [
      'HTML',
      'CSS',
      'JavaScript',
      'Nextjs',
      'Git',
      'Webpack',
      'Bootstrap',
      'MUI',
      'VS Code',
    ],
    image: '/projects/NextjsPortfolio.jpeg',
    link: '#'
  },
  
  // Add more projects as needed
];

// Modal Component
const Modal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  // Close modal if clicked outside
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modalOverlay') {
      onClose();
    }
  };

  return (
    <div
      id="modalOverlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
    >
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 lg:mx-auto relative overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-3xl">
          &times;
        </button>

        {/* Project Title as the modal heading */}
        <h2 className="text-3xl font-bold text-black text-center mb-6">{project.title}</h2>

        {/* Project image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover mb-4 rounded-lg"
        />

        {/* Long description */}
        <p className="text-lg text-gray-700 mb-4">{project.longDescription}</p>

        {/* Skills section */}
        <h4 className="text-xl  text-black font-semibold mb-2">Skills Used in This Project:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {project.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null); // State to manage the selected project
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id='projects' className="relative py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ffcc00] text-center mb-12 animate-fadeInUp">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 ease-out transform group-hover:scale-95"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-lg text-gray-300 mb-4">{project.shortDescription}</p>
                  <button
                    onClick={() => handleOpenModal(project)} // Open modal on click
                    className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Render modal only when a project is selected */}
      {selectedProject && (
        <Modal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Projects;
