import {Accordion as AccordionLib} from 'react-accessible-accordion';
import AccordionItem from "../../../UI/accordion/AccordionItem";
import styles from './UniversityAccordion.module.scss';


const UniversityAccordion = ({university, title}) => {

    if (!university.level || university.level.length === 0) {
        return
    }

    const settings = {
        allowMultipleExpanded: true,
        allowZeroExpanded: true,
    };

    const courses = <ul className={styles.list}>
        {university.course.map((text, index) => <li className={styles.listItem} key={index}>{text}</li>)}
    </ul>;

    return (
        <div className={styles.accordion}>
            <h3 className={styles.title}>{title}</h3>

            <AccordionLib {...settings} className={styles.universityBlock}>
                {university.level.map((level, index) => (
                    <AccordionItem
                        key={index}
                        title={level}
                        className={styles.universityItem}
                        description={courses}
                    />
                ))}
            </AccordionLib>
        </div>
    );
};

export default UniversityAccordion;