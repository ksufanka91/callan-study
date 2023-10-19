import styles from "./UniversityCard.module.scss";
import classNames from "classnames";
import Button from "../../../UI/Button/Button";

const UniversityCard = ({university, className}) => {
    const phoneIcon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.438615 6.78721C0.15595 6.02369 -0.0487379 5.24393 0.0129935 4.41543C0.0519818 3.90533 0.243674 3.46996 0.617311 3.11257C1.02344 2.72918 1.40682 2.32631 1.80645 1.93642C2.3263 1.42308 2.97935 1.42633 3.49919 1.93642C3.82085 2.25158 4.13925 2.57323 4.45765 2.89488C4.76631 3.20354 5.07822 3.5122 5.38687 3.8241C5.92946 4.37319 5.93271 5.01325 5.39012 5.55908C5.00024 5.94896 4.61361 6.3421 4.21723 6.72548C4.11326 6.8262 4.10351 6.91068 4.15874 7.03739C4.41867 7.6612 4.79555 8.21678 5.21793 8.73662C6.06917 9.78281 7.03088 10.712 8.17778 11.4301C8.42471 11.5828 8.69438 11.6965 8.95105 11.8362C9.08426 11.9077 9.17198 11.8849 9.2792 11.7745C9.66584 11.3748 10.0622 10.9817 10.4586 10.5886C10.9784 10.0752 11.6282 10.072 12.1481 10.5886C12.7849 11.2189 13.4185 11.8524 14.0488 12.4892C14.5784 13.0221 14.5751 13.6751 14.0423 14.2112C13.6816 14.5751 13.3015 14.9195 12.9636 15.2996C12.4697 15.852 11.8459 16.0339 11.1376 15.9949C10.1045 15.9397 9.15249 15.5953 8.23302 15.1502C6.19263 14.1592 4.45116 12.7849 2.99235 11.0499C1.91367 9.76332 1.02344 8.36624 0.438615 6.78721ZM15.2444 7.95036C15.6625 7.95036 16.0052 7.61037 15.9657 7.19415C15.6072 3.41333 12.5881 0.394283 8.80729 0.0356945C8.39106 -0.00378193 8.05107 0.338937 8.05107 0.757028C8.05107 1.17512 8.39153 1.50937 8.80676 1.55819C11.7523 1.90449 14.0969 4.24918 14.4432 7.19468C14.4921 7.60991 14.8263 7.95036 15.2444 7.95036ZM11.5698 7.1987C11.6561 7.60778 11.9867 7.95036 12.4048 7.95036C12.8229 7.95036 13.1677 7.60945 13.1062 7.1959C12.7767 4.98137 11.0201 3.22469 8.80553 2.89527C8.39199 2.83375 8.05107 3.17858 8.05107 3.59667C8.05107 4.01476 8.39365 4.34535 8.80273 4.43167C9.47728 4.574 10.0966 4.9079 10.5951 5.40638C11.0935 5.90486 11.4274 6.52415 11.5698 7.1987Z" fill="white"/>
    </svg>

    const data = getData(university);

    return (
        <div className={classNames(styles.universityCard, className)}>
            {data.map((value, index) => (
                <div className={styles.cardRow} key={index}>
                    <div className={styles.cardTitle}>{value.title}</div>
                    <b className={styles.cardData}>{value.value}</b>
                </div>
            ))}

            <Button icon={phoneIcon} className={styles.cardButton}>Связаться с нами</Button>
        </div>
    );
};

function getData(university) {
    const data = [];

    if (university.country || university.city) {
        data.push({
            title: "Расположение",
            value: university.country + ", " + university.city
        });
    }

    if (university.lang) {
        data.push({
            title: "Язык обучения",
            value: university.lang
        });
    }

    if (university.year) {
        data.push({
            title: "Год основания",
            value: university.year
        });
    }

    if (university.s_count) {
        data.push({
            title: "К-во студентов",
            value: university.s_count
        })
    }

    if (university.price) {
        data.push({
            title: "Средняя цена за семестр",
            value: university.price
        })
    }

    if (university.living_cost) {
        data.push({
            title: "Средняя цена за проживание",
            value: university.living_cost
        })
    }

    return data;
}

export default UniversityCard;