import DetailSectionComponent from "../components/DetailSectionComponent";

function Content() {
    return (
        <div>
            
            <ProjectItem 
                title='Project1'
                description='Dit is een project'
                tech={['PHP', 'SQL', 'Docker']}
                link='#'
            />

        </div>
    );
}

function ProjectItem(props) {
    const projectTech = props.tech;
    const badges = projectTech.map((tech) => <TechBadge value={tech} /> );
    return (
        <div>
            <a href={props.link} className='text-blue-500 font-bold text-lg'>{props.title}</a>
            <p className="m-2">{props.description}</p>
            <div>
                {badges}
            </div>
        </div>
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
            title='projects' 
            content={<Content />}
        />
    );
}