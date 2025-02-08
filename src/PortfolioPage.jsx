import Nav from './sections/Nav';
import About from './sections/About';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Projects from './sections/Projects';


const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav/>

      {/* Scrollable Content */}
      <div className="pt-16">
        <About/>
        <Skills/>
        <Work/>
        <Projects/>
      </div>
    </div>
  );
};

export default PortfolioPage;