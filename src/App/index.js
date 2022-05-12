import IntroComponenet from './components/IntroComponent';
import AboutComponent from './components/AboutComponent';
import SkillsComponent from './components/SkillsComponent';
import ExperienceComponent from './components/ExperienceComponent';
import EducationComponent from './components/EducationComponent';
import ProjectComponent from './components/ProjectComponent';
import FooterComponent from './components/FooterComponenet';

function App() {
    return (
        <div className='bg-slate-800 text-slate-200'>
            <IntroComponenet />
            <AboutComponent />
            <SkillsComponent />
            <ExperienceComponent />
            <EducationComponent />
            <ProjectComponent />
            <FooterComponent />
        </div>
    );
}

export default App;
