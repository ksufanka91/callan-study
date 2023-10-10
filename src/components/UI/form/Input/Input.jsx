import classNames from "classnames";
import styles from "./Input.module.scss";

const Input = ({type = 'text', placeholder = null, icon = null, className}) => {
    if (type !== 'text' && type !== 'textarea' && type !== 'tel') {
        throw new Error('Неправильный ' + type + ' тип для InputText');
    }

    return (
        <div className={classNames(styles.container, className)}>
            {icon && (
                <div className={styles.icon}>
                    {icon}
                </div>
            )}

            {type === 'textarea' && (
                <textarea className={classNames(styles.input, styles.textarea, {
                    [styles.inputWithIcon]: icon
                })}
                          placeholder={placeholder}/>
            )}

            {type !== 'textarea' && (
                <input
                    className={classNames(styles.input, {
                        [styles.inputWithIcon]: icon
                    })}
                    type={type}
                    placeholder={placeholder}/>
            )}
        </div>
    )
};

export default Input;