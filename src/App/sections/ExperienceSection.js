import DetailSectionComponent from "../components/DetailSectionComponent";

function content() {
    return (
        <div>

            <Company
                link='#'
                company='een bedrijf'
                function='software developer'
                timeframe='een tijd-een andere tijd'
            />

        </div>
    );
}

function Company(props) {
    return(
        <div>
            <div>
                <a className="text-slate-200 font-bold" href={props.link}> {props.company} </a>
                <div>
                    {props.timeframe}
                </div>
            </div>
            <div className="ml-1.5">
                {props.function}
            </div>
        </div>
    );
}

export default function ExperienceSection() {
    return (
        <DetailSectionComponent 
            title='Experience' 
            content={content()}
        />
    );
}