import className from "classnames";
import styles from "./Input.module.scss";

const Input = ({type = 'text', placeholder = null, icon = null}) => {
    return (
        <div className={className(styles.container)}>
            {icon && (
                <div className={styles.icon}>
                    {icon}
                </div>
            )}


            {type === 'textarea' && (
                <textarea className={className(styles.input, styles.textarea, {
                    [styles.inputWithIcon]: icon
                })}
                          placeholder={placeholder}/>
            )}

            {type !== 'textarea' && (
                <input
                    className={className(styles.input, {
                        [styles.inputWithIcon]: icon
                    })}
                    type={type}
                    placeholder={placeholder}/>
            )}
        </div>


    )
};

export default Input;