
const Projects = () => {
  const projects = [
    {
      title: 'Mai SecretSanta Manager',
      description: 'All-in-one management and handling for my friend groups yearly secret santa event without the extra features',
      technologies: [],
      imageUrl: 'mai_ss.png'
    },
    {
      title: 'Foodie Mate',
      description: "A home cook's best friend - recipe and ingredient tracking with weekly meal planning and nutrition calculators",
      technologies: [],
      imageUrl: 'foodiemate_recipes.png'
    },
    {
      title: 'MAPost',
      description: 'A location-centric social platform to share images and coordinates with others nearby',
      technologies: [],
      imageUrl: 'mapost_map.png'
    },
    {
      title: 'Discord Manga Bot',
      description: 'Personal discord bot that scans the r/OnePunchMan subreddit for the latest manga chapter translations',
      technologies: [],
      imageUrl: 'opm_bot.jpg'
    },
    {
      title: 'MTCH-MKR',
      description: 'UI/UX design and research project about a hypothetical third-party online gaming matchmaker',
      technologies: [],
      imageUrl: 'mtch_mkr.jpg'
    },
    {
      title: 'Drone Simulation System',
      description: 'A web application that allows users to simulate a drone delivery on the UMN campus using different pathing strategies',
      technologies: [],
      imageUrl: 'drone_sim.png'
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-base-100 py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-base-200 w-full md:w-1/4 border border-gray-500 rounded-lg shadow-md overflow-hidden transition hover:scale-105 ease-out duration-300"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-cover object-[0%+20%]"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {/*project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))*/}
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