import {AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion";
import styles from "./FaqAccordion.module.scss";

const FaqAccordionItem = ({question, answer}) => {
    return (
        <AccordionItem className={styles.block}>
            <AccordionItemHeading>
                <AccordionItemButton className={styles.button}>
                    {question}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={styles.panel}>
                <p>
                    {answer}
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    );
}

export default FaqAccordionItem;