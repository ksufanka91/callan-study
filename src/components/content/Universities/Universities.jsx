import styles from "./Universities.module.scss";
import UniversitiesSlider from "./Slider/UniversitiesSlider";

const Universities = ({universities}) => {
    return (
        <div className={styles.universities}>
            <div className="container">
                <h2 className={styles.title}>Университеты</h2>
                <div className={styles.subtitle}>
                    В нашем каталоге вы найдете более <b>100 университетов</b> из более чем <b>14 стран</b>
                </div>
                <UniversitiesSlider universities={universities}/>
            </div>
        </div>
    )
};

export default Universities;