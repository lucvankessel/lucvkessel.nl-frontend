import DetailSectionComponent from "../components/DetailSectionComponent";

function Content() {
    return (
        <div className="flex">

            <List 
                title='Talen' 
                items={['GO', 'PHP', 'Python', 'JS/TS', 'Java', 'Rust']}
            />
            
            <List 
                title='Frameworks'
                items={['Laravel', 'ReactJS', 'VueJS', 'Node']}
            />

            <List 
                title='Tools'
                items={['Docker', 'Git', 'Agile/Scrum']}
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