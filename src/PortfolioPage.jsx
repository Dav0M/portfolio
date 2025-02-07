import { useState } from 'react';

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'work', title: 'Work' },
    { id: 'projects', title: 'Projects' },
  ];

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
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Navigation Bar 
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <a href=''>David Mai</a>
          </div>
          <div className="flex space-x-6">
            {sections.map((section) => (
              <a 
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setActiveSection(section.id)}
                className={`
                  text-base transition-colors duration-300
                  ${activeSection === section.id 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600'}
                `}
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>*/}
      <div className='fixed navbar bg-base-300 top-0 z-1'>
        <div className='navbar-start'>
          <a href='' className="md:avatar hidden">
            <div className="ml-8 h-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </a>
        </div>
        <div className='navbar-center space-x-6'>
        {sections.map((section) => (
              <a 
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setActiveSection(section.id)}
                className={`
                  text-base transition-colors duration-300
                  ${activeSection === section.id 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600'}
                `}
              >
                {section.title}
              </a>
            ))}
        </div>
        <div className='navbar-end'></div>
      </div>

      {/* Scrollable Content */}
      <div className="pt-16">
        {/*
        <section id="about" className="min-h-screen bg-base-500 flex items-center">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 leading-relaxed">
                Passionate software developer with 5+ years of experience 
                in web and mobile application development. Specializing in 
                modern JavaScript frameworks and creating intuitive, 
                user-friendly interfaces.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/api/placeholder/400/400" 
                alt="Profile" 
                className="rounded-full w-64 h-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </section>
        */}
        {
        <section id="about" className='min-h-screen bg-base-100 m-auto max-x-screen-md'>
          <div className='grid md:grid-cols-2 gap-12 place-content-center h-screen w-full'>
            <div class="col-span-1 avatar size-80 my-auto place-self-center md:place-self-end">
              <img 
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                  alt="Profile" 
                  className="rounded-full w-60 h-auto md:80 md object-cover shadow-lg"
              />
            </div>
            <div class="col-span-1 my-auto place-self-center md:place-self-start w-3/4 lg:w-125 ">
              <hgroup className='w-full'>
                <h1 className='text-6xl font-bold mb-8'>Hey, I'm David</h1>
                <p className='text-xl'>I'm a Software Engineer who enjoys developing <span className='italic'>sometimes</span> useful things that solve problems.</p>
              </hgroup>
            </div>
          </div>
        </section>
        }


        {/* Projects Section */}
        <section id="projects" className="min-h-screen bg-gray-50 py-16">
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

        {/* Skills Section */}
        <section id="skills" className="min-h-screen bg-white flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Frontend', skills: ['React', 'Vue', 'Tailwind CSS'] },
                { name: 'Backend', skills: ['Node.js', 'Python', 'Django'] },
                { name: 'Tools', skills: ['Git', 'Docker', 'AWS'] }
              ].map((category, index) => (
                <div 
                  key={index} 
                  className="bg-gray-100 rounded-lg p-6 text-center"
                >
                  <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="bg-white shadow-sm rounded px-4 py-2"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;