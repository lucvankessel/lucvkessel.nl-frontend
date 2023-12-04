import DetailSectionComponent from "../components/DetailSectionComponent";
import { useTranslation } from 'react-i18next';

const detailSectionTranslations = {
    en: {
        title: "About me",
        content: `Right now i am studying for my bachelor software engineering at the Hanzehogeschool, and work part time as a back-end developer @ Klippa.
        My hobbies are: sports, programming, gaming and ofcourse doing fun things with friends.
        I would describe myself as a driven student/employee who loves to learn more and likes to help think about how processes can becom simpler, more efficient and user friendly for customers and colleagues. `
    },
    nl: {
        title: "Over mij",
        content: `Op het moment ben ik bezig met de bachelor software engineering aan de Hanzehogeschool, en werk part time als back-end developer @ Klippa. 
        Mijn hobbies zijn onder anderen: sporten, programmeren, gamen en natuurlijk leuke dingen doen met vrienden. 
        Ik zou mijzelf beschrijven als een gedreven student/werknemer die graag extra dingen bijleert en mee denkt aan hoe processen simpeler, 
        efficiënter of vriendelijker kunnen worden voor andere werknemers of klanten.`
    },
}



export default function AboutSecton() {
    const {i18n} = useTranslation();
    const language = i18n.language;

    const translations = detailSectionTranslations[language];

    return (
        <DetailSectionComponent 
            title={translations.title}
            content= 
            <p className="max-w-2xl">
                {translations.content}
            </p>
        />
    );
}