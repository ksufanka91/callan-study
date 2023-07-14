import styles from "./UniversitiesSlide.module.scss";

const UniversitiesSlide = ({image, country, quantity}) => {
    return (
        <div className={styles.slideContainer}>
            <div className={styles.slide}>
                <img src={image} alt={country} className={styles.image}/>
                <div className={styles.slideBox}>
                    <span className={styles.title}>{country}</span>
                    <span className={styles.subtitle}>{quantity}</span>
                </div>
            </div>
        </div>
    )
};

export default UniversitiesSlide;