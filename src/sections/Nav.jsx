import { useState } from 'react';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'skills', title: 'Skills' },
  ];

  return (
    <header className='fixed navbar bg-base-300 top-0 z-1'>
      <div className='navbar-start'>
        <a href='' className="md:avatar hidden">
          <div className="ml-8 h-12 rounded-full">
            <img src="avatar_img.jpg" className='hover:animate-spin'/>
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
    </header>
  );
};

export default Nav;

{/*
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
  </nav>
*/}
