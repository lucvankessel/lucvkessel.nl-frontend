import DetailSectionComponent from "../components/DetailSectionComponent";

function Content() {
    return (
        <div>
            Op het moment ben ik bezig met de opleiding HBO-ICT aan de Hanzehogeschool, met als major SoftwareEngineering. 
            Mijn hobbies zijn onder anderen: sporten, programmeren, gamen en natuurlijk leuke dingen doen met vrienden. 
            Ik zou mijzelf beschrijven als een gedreven student/werknemer die graag extra dingen bijleert en mee denkt met hoe processen simpeler, 
            efficiënter of vriendelijker kunnen worden voor andere werknemers of klanten.
        </div>
    );
}


export default function AboutSecton() {
    return (
        <DetailSectionComponent 
            title='About me' 
            content={<Content />}
        />
    );
}