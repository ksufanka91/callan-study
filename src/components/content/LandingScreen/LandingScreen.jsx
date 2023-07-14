import styles from "./LandingScreen.module.scss";
import LandingSlider from "./Slider/LandingSlider";
import ContactInfo from "../ContactInfo/ContactInfo";

const LandingScreen = ({landing}) => {
    return (
        <div className={styles.landingScreen}>
            <div className="container">
                <LandingSlider landing={landing}/>
                <ContactInfo
                    address="г. Город ул. Улица, 24 (Офис 24)"
                    schedule="Пн-Пт 9:00 - 18:00"
                    className={styles.contactInfo}
                />
            </div>
        </div>
    )
};

export default LandingScreen;