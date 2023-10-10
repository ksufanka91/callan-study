import styles from "./UniversityItem.module.scss";
import {Link} from "react-router-dom";
import StarRating from "../../../UI/rating/StarRating/StarRating";

const UniversityItem = ({item}) => {
    return (
        <Link to={'/universities/' + item.id} className={styles.universityItem} key={item.id}>
            <div className={styles.columnLeft}>
                <img src={item.image} alt={item.name} className={styles.image}/>
                <StarRating rating={item.rating} classNames={styles.ratingMob}/>
            </div>

            <div className={styles.columnCenter}>
                <h4 className={styles.title}>{item.name}</h4>
                <div className={styles.infoBox}>
                    <div className={styles.info}>
                        <img src="images/icons/study.svg" alt="icon" className={styles.infoIcon}/>
                        <div>
                            {item.level.map((level, index) =>
                                <div key={index} className={styles.infoText}>{level}</div>)}
                        </div>
                    </div>

                    <div className={styles.info}>
                        <img src="images/icons/study-2.svg" alt="icon" className={styles.infoIcon}/>
                        <div className={styles.text}>
                            {item.course.map((course, index) =>
                                <div key={index} className={styles.infoText}>{course}</div>)}
                        </div>
                    </div>
                </div>
                <div className={styles.locationBox}>
                    <img src="images/icons/flag.svg" alt="icon" className={styles.infoIcon}/>
                    <div className={styles.text}>
                        <div className={styles.infoText}><b>{item.country}</b>, {item.city}</div>
                    </div>
                </div>
            </div>
            <div className={styles.columnRight}>
                <StarRating rating={item.rating} classNames={styles.rating}/>
                <div className={styles.price}>
                    от <span className={styles.priceHighlighted}><b>{item.price}</b></span>
                </div>
                <span>за семестр</span>
            </div>
        </Link>
    );
};

export default UniversityItem;