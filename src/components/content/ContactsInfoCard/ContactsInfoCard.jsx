import styles from "./ContactsInfoCard.module.scss";

const ContactsInfoCard = ({items}) => {
    return (
        <div className={styles.contactsInfoCard}>
            {items.map(item => (
                <div className={styles.item}>
                    <div className={styles.count}>
                        {item.id}
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.title}>
                            <b>{item.title}</b>
                        </div>
                        <div className={styles.subtitle}>
                            {item.subtitle}
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default ContactsInfoCard;