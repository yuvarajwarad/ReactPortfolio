import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of your first project. Highlight key technologies and features.',
    image: '/myimages/LookingAtU.jpg',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A brief description of your second project. Highlight key technologies and features.',
    image: '/assets/images/project2.jpg',
    link: '#'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="relative py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fadeInUp">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 ease-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-lg text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
