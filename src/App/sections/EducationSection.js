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
            <div>
                <div className="text-slate-200 font-bold">{props.title}</div>
                <div>{props.timeframe}</div>
            </div>
            <div className="ml-1.5">
                {props.institute}
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