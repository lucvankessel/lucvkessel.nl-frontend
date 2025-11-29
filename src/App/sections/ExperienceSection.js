import DetailSectionComponent from "../components/DetailSectionComponent";

function content() {
    return (
        <div>
            <Company 
                link="https://werkenbijdefensie.nl"
                company="Defensie"
                function="Dienjaar soldaat"
                timeframe="September 2025 - nu"
            />

            <Company 
                link="https://www.klippa.com"
                company="Klippa"
                function="Fulltime back-end developer Golang"
                timeframe="Februari 2025 - Augustus 2025"
            />

            <Company 
                link="https://www.klippa.com"
                company="Klippa"
                function="Parttime Back-end developer Golang"
                timeframe="Juli 2023 - Februari 2025"
            />

            <Company 
                link="https://www.klippa.com"
                company="Klippa (Stage)"
                function="Stagiair AI enigineer"
                timeframe="Februari 2024 - Juni 2024"
            />

            <Company 
                link="https://www.klippa.com"
                company="Klippa (Stage)"
                function="Stagiair Back-end developer Golang"
                timeframe="Februari 2023 - Juni 2023"
            />

            <Company 
                link="https://smartranking.com/nl/"
                company="SmartRanking (Stage)"
                function="Stagiair Software Developer PHP"
                timeframe="Februari 2020 - Juni 2020"
            />

            <Company 
                link="https://www.customwebsite.nl"
                company="Customwebsite (Stage)"
                function="Stagiair Front-end programmeur HTML/CSS/JS"
                timeframe="Augustus 2018 - Januari 2019"
            />

        </div>
    );
}

function Company(props) {
    return(
        <p className="mb-2">
            <a className="text-slate-200 font-bold" href={props.link}> {props.company} </a>
            <div className="ml-1.5">
                <div>{props.function}</div>
                <div>{props.timeframe}</div>
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