import DetailSectionComponent from "../components/DetailSectionComponent";

function content() {
    return (
        <div>

            <Item 
                title="Software Engineering"
                institute="Hanzehogeschool Groningen"
                timeframe="september 2020 - july 2024"
            />

        </div>
    );
}

function Item(props) {
    return(
        <div>
            <div>
                <div className="text-slate-200 font-bold">{props.title}</div>
                <div>{props.timeframe}</div>
            </div>
            <div className="ml-1.5">
                {props.institute}
            </div>
        </div>
    );
}

export default function EducationSection() {
    return (
        <DetailSectionComponent 
            title='Education/Certificates' 
            content={content()}
        />
    );
}