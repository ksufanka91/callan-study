import styles from "./NotFound.module.scss";


const NotFound = () => {
    return (
        <div className="container">
            <h1 className={styles.title}>404</h1>
            <div className={styles.subtitle}>Страница не найдена</div>
        </div>
    );
};

export default NotFound;