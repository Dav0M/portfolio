
import About from './sections/About';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Projects from './sections/Projects';


const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Scrollable Content */}
      <div className="">
        <About/>
        <Work/>
        <Projects/>
        <Skills/>
      </div>

    </div>
  );
};

export default PortfolioPage;