import DetailSectionComponent from "../components/DetailSectionComponent";

function content() {
    return (
        <div>Een about me/introduction</div>
    );
}


export default function AboutSecton() {
    return (
        <DetailSectionComponent 
            title='About me' 
            content={content()}
        />
    );
}