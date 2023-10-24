import className from "classnames";
import Star from "../Star/Star";
import styles from "./StarRating.module.scss";


const StarRating = ({rating, classNames}) => {
    let array = Array.from(Array(5).keys());

    return (
        <div className={className(styles.rating, classNames)}>
            {array.map((_, index) => {
                return <Star selected={index + 1 <= rating} key={index}/>
            })}
        </div>
    );
};

export default StarRating;