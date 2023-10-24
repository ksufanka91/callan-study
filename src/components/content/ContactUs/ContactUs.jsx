import Form from "../../UI/form/Form";
import styles from "./ContactUs.module.scss";


const ContactUs = () => {
    return (
        <div className={styles.contact}>
            <div className="container">
                <Form/>
            </div>
        </div>
    )
};

export default ContactUs;