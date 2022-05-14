import DetailSectionComponent from "../components/DetailSectionComponent";

function content() {
    return (
        <div>

            <Item 
                title="Software Engineering"
                institute="Hanzehogeschool Groningen"
                timeframe="September 2020 - July 2024"
            />

            <Item
                title="Applicatie ontwikkelaar"
                institute="Alfa-college"
                timeframe="September 2017 - July 2020"
            />

        </div>
    );
}

function Item(props) {
    return(
        <p className="mb-2">
            <h4 className="text-slate-200 font-bold">{props.title}</h4>
            <div className="ml-1.5">
                <div>{props.institute}</div>
                <div>{props.timeframe}</div>
            </div>
        </p>
    );
}

export default function EducationSection() {
    return (
        <DetailSectionComponent 
            title='Educatie' 
            content={content()}
        />
    );
}