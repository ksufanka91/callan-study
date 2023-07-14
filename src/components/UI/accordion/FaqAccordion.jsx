import {Accordion} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import styles from "./FaqAccordion.module.scss";
import FaqAccordionItem from "./FaqAccordionItem";

const FaqAccordion = ({faq}) => {

    const settings = {
        allowMultipleExpanded: true,
        allowZeroExpanded: true,
    };

    return (
        <Accordion className={styles.row} {...settings}>
            <div>
                {faq.filter(i => i.id % 2 !== 0).map(item => (
                    <FaqAccordionItem question={item.question} answer={item.answer} key={item.id}/>
                ))}
            </div>

            <div>
                {faq.filter(i => i.id % 2 === 0).map(item => (
                    <FaqAccordionItem question={item.question} answer={item.answer} key={item.id}/>
                ))}
            </div>
        </Accordion>
    )
};

export default FaqAccordion;

