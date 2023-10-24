import UniversityItem from "../UniversityItem/UniversityItem";


const UniversitiesList = ({items}) => {

    return (
        <div>{items.map(item => <UniversityItem key={item.id} item={item}/>)}</div>
    );
};

export default UniversitiesList;