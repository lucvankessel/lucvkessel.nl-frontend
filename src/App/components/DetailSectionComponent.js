export default function DetailSectionComponent(props) {
    return(
        <section className='p-2 pt-4 mt-4 flex-none sm:p-28 sm:flex sm:pt-0'>
            <h3 className='w-full text-left mr-16 font-bold text-blue-500 text-lg uppercase sm:w-1/4 sm:text-right' > {props.title} </h3>
            <div className='w-full ml-2 mt-2 sm:w-3/4 sm:ml-2'> {props.content} </div>
        </section>
    );
}