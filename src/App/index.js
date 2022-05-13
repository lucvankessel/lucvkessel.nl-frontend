import IntroComponenet from './components/IntroComponent';
import FooterComponent from './components/FooterComponenet';
import AboutSecton from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsComponent';

function App() {
    return (
        <div className='bg-slate-800 text-slate-400'>
            <IntroComponenet />
            <AboutSecton />
            <SkillsSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <FooterComponent />
        </div>
    );
}

export default App;
