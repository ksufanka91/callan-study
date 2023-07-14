import styles from "./FeedbackSlide.module.scss";


const FeedbackSlide = ({image, title, text}) => {
    return (
        <div className={styles.slideContainer}>
            <div className={styles.slide}>
                <img src={image} alt={title} className={styles.image}/>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
            </div>
        </div>
    )
};

export default FeedbackSlide;