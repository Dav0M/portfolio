
const Work = () => {
  const exp = [
    {
      company: 'Neurotype Inc.',
      position: 'Software Engineer Intern',
      description: 'Worked with a team to create a dashboard MVP to handle clinical data from a medical device',
      imageUrl: 'neurotype.png',
      link: 'https://www.neurotype.io/'
    },
  ]
  return (
    <section id="experience" className="bg-base-300 py-32 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {exp.map((exp, index) => (
            <div 
              key={index} 
              className="bg-base-100 w-full md:w-1/3 border border-gray-200 rounded-lg shadow-md overflow-hidden transition hover:scale-105 ease-out duration-300"
            >
              <img 
                src={exp.imageUrl} 
                alt={exp.company} 
                className="w-full h-48 object-cover object-[0%+20%]"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold"><a href={exp.link} className="underline text-purple-400 hover:text-purple-200" target="_blank" rel="noopener noreferrer">{exp.company}</a></h3>
                <h4 className="mb-2 italic">{exp.position}</h4>
                <p className="text-gray-400 mb-4">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;