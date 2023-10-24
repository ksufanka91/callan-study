import FaqAccordion from "../../UI/accordion/FaqAccordion";
import styles from "./Faq.module.scss";


const Faq = ({faq}) => {

    return (
        <div className={styles.faq}>
            <div className="container">
                <h2 className={styles.title}>Вопросы и ответы</h2>
                <FaqAccordion items={faq}/>
            </div>
        </div>
    )
};

export default Faq;