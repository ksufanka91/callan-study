import CardsWithInfo from "../../UI/CardsWithInfo/CardsWithInfo";
import styles from './Advantages.module.scss';


const Advantages = ({subtitle, title, advantages}) => {
    return (
        <div className={styles.advantages}>
            <div className="container">
                <div className={styles.subtitle}>{subtitle}</div>
                <h2 className={styles.title}>{title}</h2>

                <CardsWithInfo items={advantages}/>
            </div>
        </div>
    )
};

export default Advantages;