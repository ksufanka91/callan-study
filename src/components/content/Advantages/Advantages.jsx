import styles from './Advantages.module.scss';

const Advantages = () => {
    return (
        <div className={styles.advantages}>
            <div className="container">
                <div className={styles.subtitle}>
                    <b>Добро пожаловать</b> в нашу группу иностранного образования
                </div>
                <h2 className={styles.title}>Почему мы?</h2>
                <div className={styles.box}>
                    <div className={styles.item}>
                        <img src="images/icons/advantages-icon-1.svg" alt="suitcases" className={styles.image}/>

                        <div><b>Сертифицированные услуги</b> нашей профессиональной команды</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imageBox}>
                            <img src="images/icons/advantages-icon-2.svg" alt="passport" className={styles.image}/>
                        </div>
                        <div className={styles.itemTitle}>
                            <b>Высокие</b> визовые ставки (98% наших студентов получили визу)
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imageBox}>
                            <img src="images/icons/advantages-icon-3.svg" alt="books" className={styles.image}/>
                        </div>
                        <div>Учеба в <b>престижных</b> университетах, которые входят в Топ-1000</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Advantages;