export default function DetailSectionComponent(props) {
    return(
        <section className='p-28 flex'>
            <h3 className='w-1/4 text-right mr-16 font-bold text-blue-500 text-lg uppercase'> {props.title} </h3>
            <div className='w-3/4 mt-2'> {props.content} </div>
        </section>
    );
}