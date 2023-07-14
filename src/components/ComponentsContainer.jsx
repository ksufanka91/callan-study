import styles from "./ComponentsContainer.module.scss";

const ComponentsContainer= ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
};

export default ComponentsContainer;