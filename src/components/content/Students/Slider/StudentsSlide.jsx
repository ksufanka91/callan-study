import styles from "./StudentsSlide.module.scss";


const StudentsSlide = ({image, title}) => {
    return (
        <div className={styles.slideContainer}>
            <img src={image} alt={title} className={styles.image}/>
        </div>
    )
};

export default StudentsSlide;