import IntroComponenet from './components/IntroComponent';
import FooterComponent from './components/FooterComponenet';
import AboutSecton from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsComponent';

const personStructuredData = {
    "@context": "http://schema.org/",
    "@type": "Person",
    "name": "Luc van Kessel",
    "alternateName": "Lucas van Kessel",
    "nationality": "Dutch",
    "description": "Student SoftwareEngineering Hanzehogeschool Groningen",
    "url": "https://lucvkessel.nl",
    "email": "lucv.k@outlook.com",
    "sameAs": 
    [
        "https://www.linkedin.com/in/luc-van-kessel-1448a71a2",
        "https://github.com/lucvankessel"
    ]
};

function App() {
    return (
        <div>

            <script type="application/ld+json">
                {JSON.stringify(personStructuredData)}
            </script>

            <div className='bg-slate-800 text-slate-400'>
                <IntroComponenet />
                <AboutSecton />
                <SkillsSection />
                <EducationSection />
                <ExperienceSection />
                <ProjectsSection />
                <FooterComponent />
            </div>
        </div>
    );
}

export default App;
