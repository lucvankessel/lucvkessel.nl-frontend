import DetailSectionComponent from "../components/DetailSectionComponent";

function Content() {
    return (
        <div className="flex">

            <List 
                title='Talen' 
                items={['PHP', 'SQL', 'Javascript', 'Typescript', 'Java', 'Python', 'Rust']}
            />
            
            <List 
                title='Frameworks'
                items={['Laravel', 'ReacJS', 'VueJS', 'Node', 'Flask']}
            />

            <List 
                title='Tools'
                items={['Docker', 'Git', 'Agile']}
            />

        </div>
    );
}

function List (props) {
    const listItems = props.items;
    const items = listItems.map((item) => <ListItem value={item} />);
    return(
        <p className="grow">
            <h3 className="text-lg font-bold uppercase text-slate-200"> {props.title} </h3>
            <ul className="list-none ml-1.5">
                {items}
            </ul>
        </p>
    );
}

function ListItem(props) {
    return(
        <li>{props.value}</li>
    );
}

export default function SkillsSection() {
    return (
        <DetailSectionComponent
            title='Skills' 
            content={<Content />}
        />
    );
}