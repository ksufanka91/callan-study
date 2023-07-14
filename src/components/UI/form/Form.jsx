import styles from "./Form.module.scss";
import Input from "./Input/Input";
import Button from "../Button/Button";

const Form = () => {
    const arrowIcon = <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.00760714 0.000488281L0 5.33381L6.85714 6.85763L0 8.38145L0.00760714 13.7148L16 6.85763L0.00760714 0.000488281Z" fill="white"/>
    </svg>

    const userIcon = <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame 1">
            <g id="Group 19">
                <path id="Vector" d="M6.71289 1.00024C4.82284 1.00024 3.28516 2.53793 3.28516 4.42798C3.28516 6.31803 4.82284 7.85571 6.71289 7.85571C8.60294 7.85571 10.1406 6.31803 10.1406 4.42798C10.1406 2.53793 8.60294 1.00024 6.71289 1.00024Z" fill="#BED8E8"/>
                <path id="Vector_2" d="M10.9777 10.095C10.0392 9.14218 8.79515 8.61743 7.47461 8.61743H5.95117C4.63066 8.61743 3.38657 9.14218 2.44813 10.095C1.51429 11.0432 1 12.2948 1 13.6194C1 13.8297 1.17052 14.0002 1.38086 14.0002H12.0449C12.2553 14.0002 12.4258 13.8297 12.4258 13.6194C12.4258 12.2948 11.9115 11.0432 10.9777 10.095Z" fill="#BED8E8"/>
            </g>
        </g>
    </svg>

    const phoneIcon = <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 18">
            <path id="Vector" d="M0.382872 5.92304C0.135027 5.25357 -0.0444466 4.56986 0.00968037 3.84342C0.0438658 3.39616 0.211944 3.01442 0.539555 2.70106C0.895654 2.3649 1.23181 2.01165 1.58221 1.66979C2.03802 1.21969 2.61062 1.22253 3.06643 1.66979C3.34846 1.94613 3.62764 2.22816 3.90682 2.51019C4.17746 2.78082 4.45094 3.05146 4.72158 3.32494C5.19733 3.80639 5.20017 4.3676 4.72443 4.84619C4.38257 5.18805 4.04357 5.53275 3.69601 5.86891C3.60485 5.95722 3.59631 6.03129 3.64473 6.14239C3.87264 6.68936 4.2031 7.1765 4.57344 7.63231C5.31982 8.54962 6.16306 9.36437 7.16869 9.99396C7.3852 10.1278 7.62165 10.2276 7.8467 10.3501C7.9635 10.4127 8.04042 10.3928 8.13443 10.2959C8.47343 9.94553 8.82099 9.60082 9.16854 9.25612C9.62434 8.80601 10.1941 8.80316 10.6499 9.25612C11.2083 9.80878 11.7638 10.3643 12.3164 10.9227C12.7808 11.3899 12.778 11.9625 12.3108 12.4325C11.9945 12.7516 11.6612 13.0536 11.365 13.3869C10.9319 13.8712 10.385 14.0307 9.76393 13.9965C8.85802 13.9481 8.02332 13.6461 7.21712 13.2558C5.42808 12.3869 3.90113 11.1819 2.62202 9.66065C1.67622 8.53253 0.895654 7.30755 0.382872 5.92304ZM13.3648 6.9429C13.7314 6.9429 14.0319 6.6448 13.9973 6.27984C13.6829 2.96477 11.0357 0.317624 7.72064 0.00320793C7.35569 -0.0314056 7.05758 0.269095 7.05758 0.635684C7.05758 1.00227 7.3561 1.29535 7.72018 1.33815C10.3028 1.64179 12.3587 3.69765 12.6623 6.28031C12.7051 6.64439 12.9982 6.9429 13.3648 6.9429ZM10.1428 6.28383C10.2185 6.64253 10.5084 6.9429 10.875 6.9429C11.2416 6.9429 11.5439 6.64398 11.49 6.28138C11.2011 4.33964 9.66084 2.79937 7.7191 2.51052C7.3565 2.45659 7.05758 2.75894 7.05758 3.12553C7.05758 3.49211 7.35796 3.78198 7.71665 3.85766C8.30811 3.98246 8.85111 4.27523 9.28819 4.7123C9.72526 5.14938 10.018 5.69238 10.1428 6.28383Z" fill="#BED8E8"/>
        </g>
    </svg>

    const commentIcon = <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M7.00019 14.0005C10.8599 14.0005 14 10.8603 14 7.00049C14 3.14068 10.8599 0.000488281 7.00019 0.000488281C3.14044 0.000488281 0.000405625 3.14068 0.000405625 7.00049C0.000405625 8.69974 0.601922 10.3068 1.70429 11.5784L0.148823 13.1134C-0.166435 13.4245 0.0519509 13.9651 0.496836 13.9672C0.500262 13.9673 6.99679 14.0005 7.00019 14.0005V14.0005ZM4.02403 4.52305H10.0096C10.2851 4.52305 10.5084 4.74639 10.5084 5.02187C10.5084 5.29734 10.2851 5.52068 10.0096 5.52068H4.02403C3.74854 5.52068 3.52524 5.29734 3.52524 5.02187C3.52524 4.74639 3.74858 4.52305 4.02403 4.52305ZM4.02403 6.5183H10.0096C10.2851 6.5183 10.5084 6.74164 10.5084 7.01712C10.5084 7.29259 10.2851 7.51593 10.0096 7.51593H4.02403C3.74854 7.51593 3.52524 7.29259 3.52524 7.01712C3.52524 6.74164 3.74858 6.5183 4.02403 6.5183ZM3.52524 9.01237C3.52524 8.73689 3.74854 8.51355 4.02403 8.51355H10.0096C10.2851 8.51355 10.5084 8.73689 10.5084 9.01237C10.5084 9.28784 10.2851 9.51118 10.0096 9.51118H4.02403C3.74858 9.51118 3.52524 9.28784 3.52524 9.01237Z" fill="#BED8E8"/>
    </svg>



    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.formBox}>
            <div className={styles.form}>
                <h3 className={styles.title}>Связатся с нами</h3>
                <div className={styles.subtitle}>
                    Оставьте свои данные и наш специалист обязательно свяжется с Вами в течение дня
                </div>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <Input type='text' placeholder="Ваше имя" icon={userIcon}/>
                    <Input type='phone' placeholder="+7 (___) ___ - __ - __" icon={phoneIcon}/>
                    <Input type='textarea' placeholder="Дополнительные комментарии" icon={commentIcon}/>
                    <Button children="Отправить" icon={arrowIcon} className={styles.button}/>
                </form>
            </div>
        </div>

    )
};

export default Form;