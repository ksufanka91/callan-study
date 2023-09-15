import ContactsInfo from "../ContactsInfo/ContactsInfo";
import styles from "./ContactMap.module.scss";
import ContactsInfoCard from "../ContactsInfoCard/ContactsInfoCard";
import contactsInfoCard from "../../../data/contactsInfoCard.json";


const ContactMap = ({mainTitle, subtitle}) => {
    return (
        <div className={styles.contactMap}>
            <div className="container">
                <h1 className="visuallyHidden">{mainTitle}</h1>
                <h2 className={styles.mainTitle}>{mainTitle}</h2>
                <div className={styles.subtitle}>{subtitle}</div>
                <ContactsInfoCard items={contactsInfoCard}/>
                <ContactsInfo/>
            </div>

        </div>
    );
};

export default ContactMap;