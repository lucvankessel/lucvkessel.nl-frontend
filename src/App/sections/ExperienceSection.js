import DetailSectionComponent from "../components/DetailSectionComponent";

function content() {
    return (
        <div>

            <Company
                link='#'
                company='Aldi Drachten'
                function='Part-time Order Picker'
                timeframe='July 2020 - '
            />

            <Company 
                link="#"
                company="SmartRanking"
                function="Stagier Software Developer"
                timeframe="Februari 2020 - Juni 2020"
            />

            <Company 
                link="#"
                company="customwebsite"
                function="Stagier Front-end programmeur"
                timeframe="Augustus 2018 - Januari 2019"
            />

        </div>
    );
}

function Company(props) {
    return(
        <p>
            <div>
                <a className="text-slate-200 font-bold" href={props.link}> {props.company} </a>
                <div>
                    {props.timeframe}
                </div>
            </div>
            <div className="ml-1.5">
                {props.function}
            </div>
        </p>
    );
}

export default function ExperienceSection() {
    return (
        <DetailSectionComponent 
            title='Ervaring' 
            content={content()}
        />
    );
}