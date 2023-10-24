import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import {forwardRef} from "react";
import classNames from "classnames";
import Checkbox from "../../UI/form/Checkbox/Checkbox";
import Button from "../../UI/Button/Button";
import styles from "./Filters.module.scss";


const Filters = forwardRef(({filters, open, hideFilter}, ref) => {
    const settings = {
        allowMultipleExpanded: true,
        allowZeroExpanded: true,
    }

    return (
        <div ref={ref} className={classNames(styles.filter, {[styles.filterOpen]: open})}>
            <h3 className={styles.title}>Фильтры</h3>

            <button onClick={() => hideFilter()} className={styles.closeButton}/>

            <Accordion {...settings}>
                {filters.map(filter => (
                    <AccordionItem key={filter.id}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className={styles.header}>
                                    <img src={filter.icon} alt={filter.title} className={styles.headerImage}/>
                                    <div>{filter.title}</div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={styles.inputBox}>
                                {filter.values.map((value, index) =>
                                    <label key={index} className={styles.label}>
                                        <Checkbox/>
                                        {value}
                                    </label>)}
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>

            <Button onClick={() => hideFilter()} className={styles.filterButton}>Применить</Button>
        </div>
    );
});

export default Filters;