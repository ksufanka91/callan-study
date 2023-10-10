import UniversityItem from "../UniversityItem/UniversityItem";
import styles from "./UniversitiesList.module.scss";


const UniversitiesList = ({items}) => {

    return (
        <div className={styles.universitiesList}>
            {items.map(item => <UniversityItem key={item.id} item={item}/>)
            }
        </div>
    );
};

export default UniversitiesList;