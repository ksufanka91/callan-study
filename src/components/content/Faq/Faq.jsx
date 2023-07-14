import styles from "./Faq.module.scss";
import FaqAccordion from "../../UI/accordion/FaqAccordion";

const Faq = ({faq}) => {
    return (
        <div className={styles.faq}>
            <div className="container">
                <h2 className={styles.title}>Вопросы и ответы</h2>
                <FaqAccordion faq={faq}/>
            </div>
        </div>
    )
};

export default Faq;