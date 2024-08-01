import DetailSectionComponent from "../components/DetailSectionComponent";

function Content() {
    return (
        <p className="max-w-2xl">
            Recentelijk heb ik een bachelor software engineering afgerond aan de Hanzehogeschool en start in September 2024 met een pre-master computer science.
            Mijn hobbies zijn onder anderen: sporten(sportschool, kitesurfen, snowboarden), programmeren en ben veel te vinden met vrienden op festivals of waar dan ook. 
            Ik zou mijzelf omschrijven als een gedreven student/werknemer die graag extra dingen bijleert en mee denkt aan hoe processen simpeler, 
            efficiënter of vriendelijker kunnen worden voor klanten en andere werknemers.
        </p>
    );
}


export default function AboutSecton() {
    return (
        <DetailSectionComponent 
            title='Over mij' 
            content={<Content />}
        />
    );
}