import DetailSectionComponent from "../components/DetailSectionComponent";

function Content() {
    return (
        <div>

            <ProjectItem
                title='DB Time Machine'
                description='   Dit project was onderdeel van een hackathon die georganiseerd werd door Klippa.
                                DB Time Machine is gericht op het automatisch kunnen switchen tussen verschillende database versies en automatisch kunnen migraten van nieuwe migrations.
                                Dit was bedacht nadat wij tijdens het developen meerdere keren tegen het probleem aanliepen dat we een hele database moesten weg gooien omdat we een andere versie van de codebase wouden testen.
                                Dit weg gooien en opnieuw aanmaken en vullen met data kostte te veel tijd in onze ogen.
                            '
                tech={['Golang']}
                link='https://github.com/klippa-app/db-time-machine'
            />

            <ProjectItem 
                title='Persoonlijke website'
                description='   Dit project kijkt u nu naar. Mijn CV in website vorm. Gemaakt met ReactJS en TailwindCSS. 
                                Gehost in een Docker container op DigitalOcean. 
                                Dit project word nog uitgebreid met een API backend om alle content via een database te beheren.
                            '
                tech={['ReactJS', 'TailwindCSS', 'Docker', 'DigitalOcean']}
                link='#'
            />

        </div>
    );
}

function ProjectItem(props) {
    const projectTech = props.tech;
    const badges = projectTech.map((tech) => <TechBadge value={tech} /> );
    return (
        <p className="mb-2">
            <a href={props.link} className='text-blue-500 font-bold text-lg'>{props.title}</a>
            <div className="m-2">{props.description}</div>
            <div>
                {badges}
            </div>
        </p>
    );
}

function TechBadge(props) {
    return (
        <span className="border-2 border-blue-700 text-blue-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {props.value}
        </span>
    );
}

export default function ProjectsSection() {
    return (
        <DetailSectionComponent 
            title='Projecten' 
            content={<Content />}
        />
    );
}