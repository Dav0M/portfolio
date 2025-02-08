
import About from './sections/About';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Projects from './sections/Projects';


const PortfolioPage = () => {
  return (
    <div className="bg-gray-100">
      <About/>
      <Work/>
      <Projects/>
      <Skills/>
    </div>
  );
};

export default PortfolioPage;