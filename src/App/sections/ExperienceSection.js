import DetailSectionComponent from "../components/DetailSectionComponent";

function content() {
    return (
        <div>

            <Company 
                link="https://www.klippa.com"
                company="Klippa"
                function="Parttime Back-end developer (Golang, ent, gin(/fizz), minio, asynq)"
                timeframe="Juli 2023 - Nu"
            />

            <Company 
                link="https://www.klippa.com"
                company="Klippa (Stage)"
                function="Stagiair Back-end developer (Golang, ent, gin(/fizz), minio, asynq)"
                timeframe="Februari 2023 - June 2023"
            />

            <Company 
                link="https://smartranking.com/nl/"
                company="SmartRanking (Stage)"
                function="Stagiair Software Developer (PHP, Wordpress, JS, Technische SEO)"
                timeframe="Februari 2020 - Juni 2020"
            />

            <Company 
                link="https://www.customwebsite.nl"
                company="Customwebsite (Stage)"
                function="Stagiair Front-end programmeur (HTML, JS, CSS, PHP)"
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