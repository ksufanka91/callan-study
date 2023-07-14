import styles from './Socials.module.scss';

const Socials = ({
                     size = 'default' // 'default' | 'big'
                 }) => {

    const width = size === 'big' ? 25 : 16;
    const height = size === 'big' ? 25 : 16;

    return (
        <div className={styles.socials}>
            <svg width={width} height={height} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M11.2535 0.686432H4.28918C1.92413 0.686432 0 2.61065 0 4.9757V11.94C0 14.3052 1.92413 16.2293 4.28918 16.2293H11.2535C13.6187 16.2293 15.5429 14.3051 15.5429 11.94V4.9757C15.543 2.61065 13.6187 0.686432 11.2535 0.686432ZM7.77141 4.45286C5.56302 4.45286 3.76641 6.24947 3.76641 8.45786C3.76641 10.6662 5.56302 12.4627 7.77141 12.4627C9.9798 12.4627 11.7764 10.6662 11.7764 8.45786C11.7764 6.24947 9.9798 4.45286 7.77141 4.45286ZM7.77141 11.0836C6.32351 11.0836 5.14544 9.90567 5.14544 8.45777C5.14544 7.00978 6.32342 5.83181 7.77141 5.83181C9.2194 5.83181 10.3974 7.00978 10.3974 8.45777C10.3974 9.90567 9.21931 11.0836 7.77141 11.0836ZM11.23 3.57957C11.4177 3.39111 11.6787 3.28354 11.9444 3.28354C12.211 3.28354 12.4721 3.39111 12.6596 3.57957C12.8481 3.76712 12.9556 4.02822 12.9556 4.29483C12.9556 4.56053 12.8481 4.82163 12.6596 5.0101C12.4711 5.19764 12.211 5.30613 11.9444 5.30613C11.6787 5.30613 11.4176 5.19764 11.23 5.0101C11.0415 4.82163 10.9331 4.56062 10.9331 4.29483C10.9331 4.02822 11.0414 3.76712 11.23 3.57957Z"
                      fill="#52BFFF"/>
            </svg>
            <svg width={width} height={height} viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.87437 3.61214C6.89801 3.58541 7.00854 3.4981 7.44262 3.4981L8.75898 3.49757C9.22197 3.49757 9.59847 3.12027 9.59847 2.65645V0.844563C9.59847 0.381535 9.2225 0.00423342 8.7603 0.00343964L7.4081 0C6.10336 0 5.32169 0.0911452 4.52802 0.907C3.73791 1.71915 3.32021 2.85291 3.32021 4.1855V5.86947H1.70303C1.24003 5.86947 0.863403 6.24678 0.863403 6.7106V8.71431C0.863403 9.17813 1.24003 9.55543 1.70303 9.55543H3.32021V16.1589C3.32021 16.6227 3.69684 17 4.15984 17H5.94931C6.4123 17 6.78893 16.6227 6.78893 16.1589V9.55556H8.76571C9.22871 9.55556 9.6052 9.17813 9.6052 8.71457L9.60626 6.71073C9.60626 6.40606 9.44079 6.12414 9.1743 5.97505C9.05082 5.90599 8.90714 5.86947 8.75898 5.86947H6.78893V4.12769C6.78893 3.78161 6.83542 3.65632 6.87437 3.61214Z"
                    fill="#52BFFF"/>
            </svg>
            <svg width={width} height={height} viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.0934 14.2307C9.91111 14.4035 9.80055 14.6386 9.78368 14.8892L9.46822 19.5747C9.42934 20.1521 9.93934 20.6479 10.3579 20.2482C10.4226 20.1864 10.486 20.12 10.5516 20.0511L12.7031 17.8799C13.0586 17.5211 13.6257 17.4837 14.0252 17.7927L19.0737 21.6967C20.1279 22.3171 20.8706 21.9904 21.155 20.6726L24.9278 2.00428C24.9279 2.00379 24.9282 2.00335 24.9285 2.00299C24.9289 2.00263 24.9291 2.00216 24.9292 2.00168C25.2631 0.356646 24.3653 -0.28659 23.3384 0.117045L1.16075 9.0831C-0.352826 9.7035 -0.329909 10.5945 0.903454 10.9982L6.11372 12.7095C6.40406 12.8049 6.72207 12.7622 6.97704 12.5938L19.7435 4.15842C20.3633 3.72503 20.9268 3.96483 20.4633 4.39822L10.0934 14.2307Z"
                    fill="#52BFFF"/>
            </svg>
        </div>
    )
};

export default Socials;