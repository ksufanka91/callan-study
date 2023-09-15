import styles from "./Contacts.module.scss";
import className from "classnames";
import ContactsInfo from "../ContactsInfo/ContactsInfo";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={className("container", styles.flexContainer)}>
                <h2 className={styles.contactsTitle}>Остались вопросы?</h2>
                <div className={styles.subtitle}>Свяжитесь с нами и мы ответим на все ваши вопросы</div>

                <ContactsInfo/>
            </div>
        </div>
    )
};

export default Contacts;