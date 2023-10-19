import {Accordion as AccordionLib} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import styles from "./FaqAccordion.module.scss";
import classNames from "classnames";
import AccordionItem from "./AccordionItem";

const FaqAccordion = ({items}) => {
    const settings = {
        allowMultipleExpanded: true,
        allowZeroExpanded: true,
    };

    return (
        <AccordionLib className={styles.row} {...settings}>
            <div className={styles.column}>
                {items.filter(i => i.id % 2 !== 0).map(item => (
                    <AccordionItem title={item.question} description={<p>{item.answer}</p>} key={item.id} className={styles.faqItem}/>
                ))}
            </div>

            <div className={styles.column}>
                {items.filter(i => i.id % 2 === 0).map(item => (
                    <AccordionItem title={item.question} description={<p>{item.answer}</p>} key={item.id} className={styles.block}/>
                ))}
            </div>
        </AccordionLib>
    )
};

export default FaqAccordion;

