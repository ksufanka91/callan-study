import styles from "../../UI/CardsWithInfo/CardsWithInfo.module.scss";

const CardsWithInfo = ({items, title, subtitle}) => {
    return (
        <>
            <h1 className="visuallyHidden">{title}</h1>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.subtitle}>{subtitle}</div>

            <div className={styles.box}>
                {items.map(item => (
                    <div className={styles.item} key={item.id}>
                        <img src={item.image} alt={item.alt} className={styles.image}/>
                        <div dangerouslySetInnerHTML={{__html: item.text}}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CardsWithInfo;