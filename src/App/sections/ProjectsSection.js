import DetailSectionComponent from "../components/DetailSectionComponent";

function Content() {
    return (
        <div>
            
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
        <p>
            <a href={props.link} className='text-blue-500 font-bold text-lg'>{props.title}</a>
            <p className="m-2">{props.description}</p>
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