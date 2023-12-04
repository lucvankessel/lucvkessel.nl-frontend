//This is the intro/header.
import { useTranslation } from 'react-i18next';

const introTranslations = {
    en: {
        h1: 'Hey! Nice to see you!',
        h2: 'I am Luc van Kessel. Full-time student software engineering, Hanzehogeschool Groningen and part time back-end developer @ Klippa',
      },
      nl: {
        h1: 'Hey! Leuk je te zien',
        h2: 'Ik ben Luc van Kessel. Full-time student software engineering, Hanzehogeschool Groningen en part time back-end developer @ Klippa.',
      },
}

export default function IntroComponent() {
    const {i18n} = useTranslation();
    const language = i18n.language;

    const translations = introTranslations[language];

    return(
        <header className=' p-4 h-screen flex flex-col justify-around text-slate-200 max-w-screen-lg sm:ml-20 sm:px-32 sm:py-28'>

            <h1 className='text-4xl'>
                {translations.h1}
            </h1>

            <h2 className='text-3xl font-light'>
                {translations.h2}
            </h2>

            <h3 className='text-2xl'>
                <a href="mailto:lucv.k@outlook.com?SUBJECT=Hey Luc">lucv.k@outlook.com</a>
            </h3>

        </header>
    );
}