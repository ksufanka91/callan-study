import FeedbackSlider from "./Slider/FeedbackSlider";
import styles from "./Feedback.module.scss";


const Feedback = ({feedback}) => {
    return (
        <div className={styles.feedback}>
            <div className="container">
                <h2 className={styles.title}>Отзывы наших студентов</h2>
                <FeedbackSlider feedback={feedback}/>
            </div>
        </div>
    )
};

export default Feedback;