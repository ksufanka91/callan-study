import styles from "./Checkbox.module.scss";

const Checkbox = () => {
    return (
        <>
            <input type="checkbox" className={styles.checkbox}/>
            <span className={styles.fake}/>
        </>
    );
};

export default Checkbox;