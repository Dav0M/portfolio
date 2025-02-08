
const Projects = () => {
  const projects = [
    {
      title: 'Mai SecretSanta Manager',
      description: 'All-in-one management and handling for my friend groups yearly secret santa event without the extra features',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: '/api/placeholder/400/300'
    },
    {
      title: 'Foodie Mate',
      description: 'Recipe and ingrediant tracker with meal planning and nutrition calculators',
      technologies: ['Azure', 'NoSQL', 'React'],
      imageUrl: '/api/placeholder/400/300'
    },
    {
      title: 'Discord Manga Bot',
      description: 'Personal discord bot that scans the r/OnePunchMan subreddit for the latest manga chapter translations',
      technologies: ['Python'],
      imageUrl: '/api/placeholder/400/300'
    },
    {
      title: 'MTCH-MKR',
      description: 'UI/UX design and research project about a third-party gaming matchmaker',
      technologies: ['Figma'],
      imageUrl: '/api/placeholder/400/300'
    },
    {
      title: 'MAPost',
      description: 'Location-centric social platform to share images and coordinates',
      technologies: ['REST API', 'Azure', 'PostgreSQL'],
      imageUrl: '/api/placeholder/400/300'
    },
    {
      title: 'PROJECT 6',
      description: 'Some bull',
      technologies: ['Code'],
      imageUrl: '/api/placeholder/400/300'
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
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