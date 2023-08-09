//This is the intro/header.

export default function IntroComponent() {
    return(
        <header className=' p-4 h-screen flex flex-col justify-around text-slate-200 max-w-screen-lg sm:ml-20 sm:px-32 sm:py-28'>

            <h1 className='text-4xl'>Hey! Leuk je te zien.</h1>

            <h2 className='text-3xl font-light'>
                Ik ben Luc van Kessel. Full-time student Softwareengineering, Hanzehogeschool groningen en parttime back-end developer bij Klippa.
            </h2>

            <h3 className='text-2xl'>
                <a href="mailto:lucv.k@outlook.com?SUBJECT=Hey Luc">lucv.k@outlook.com</a>
            </h3>

        </header>
    );
}