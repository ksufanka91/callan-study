import styles from "./Students.module.scss";
import StudentsSlider from "./Slider/StudentsSlider";

const Students = ({students}) => {
    return (
        <div className={styles.students}>
            <div className="container">
                <h2 className={styles.title}>Фотографии наших студентов</h2>
                <StudentsSlider students={students}/>
            </div>
        </div>
    )
};

export default Students;