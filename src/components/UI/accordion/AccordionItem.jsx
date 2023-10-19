import {
    AccordionItem as AccordionItemLib,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import styles from "./AccordionItem.module.scss";
import classNames from "classnames";

const AccordionItem = ({title, description, className}) => {
    return (
        <AccordionItemLib className={classNames(styles.block, className)}>
            <AccordionItemHeading>
                <AccordionItemButton className={styles.button}>
                    {title}
                </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel className={styles.panel}>
                {description}
            </AccordionItemPanel>
        </AccordionItemLib>
    );
}

export default AccordionItem;