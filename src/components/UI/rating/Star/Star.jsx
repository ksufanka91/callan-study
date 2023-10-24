import styles from "./Star.module.scss";

const Star = ({selected = false}) => {

    return (
        <span className={styles.image}>
             {selected ? <img src="images/starRating/star-filled.svg" alt="star"/> :
                 <img src="images/starRating/star-empty.svg" alt="star"/>}
        </span>
    );
};

export default Star;