import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({
                    children,
                    color = 'primary', // 'primary' | 'secondary'
                    type = 'button',   // 'button' | 'submit'
                    className = null,
                    icon = null,
                }) => {
    return (
        <button className={classNames(styles.button, {
            [styles.buttonSecondary]: color === 'secondary',
            [styles.buttonWithIcon]: icon,
        }, className)}
                type={type}>
            {icon && <span className={styles.buttonIcon}>{icon}</span>}

            {children}
        </button>
    )
}

export default Button;