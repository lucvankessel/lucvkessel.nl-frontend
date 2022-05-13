//This is the intro/header.

export default function IntroComponent() {
    return(
        <header className='px-32 py-28 h-screen flex flex-col justify-around text-slate-200'>

            <h1 className='text-4xl'>Hey! Leuk je te zien.</h1>

            <h2 className='text-4xl'>
                Ik ben Luc van Kessel.
            </h2>

            <h3 className='text-2xl'>
                <a href="mailto:lucv.k@outlook.com?SUBJECT=Hey Luc">lucv.k@outlook.com</a>
            </h3>

        </header>
    );
}