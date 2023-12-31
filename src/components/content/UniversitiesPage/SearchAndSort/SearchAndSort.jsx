import Input from "../../../UI/form/Input/Input";
import styles from "./SearchAndSort.module.scss";


const SearchAndSort = () => {
    const searchIcon = <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.9042 12.9798L11.0362 10.1118C11.9006 9.04453 12.421 7.68774 12.421 6.21051C12.421 2.78605 9.63494 0 6.21048 0C2.78602 0 0 2.78605 0 6.21051C0 9.63497 2.78606 12.421 6.21052 12.421C7.68774 12.421 9.04453 11.9006 10.1118 11.0362L12.9798 13.9043C13.1075 14.0319 13.3144 14.0319 13.4421 13.9043L13.9043 13.4421C14.0319 13.3144 14.0319 13.1075 13.9042 12.9798ZM6.21052 11.1135C3.50683 11.1135 1.30748 8.9142 1.30748 6.21051C1.30748 3.50683 3.50683 1.30748 6.21052 1.30748C8.9142 1.30748 11.1135 3.50683 11.1135 6.21051C11.1135 8.9142 8.9142 11.1135 6.21052 11.1135Z" fill="#BED8E8"/>
    </svg>

    return (
        <div className={styles.searchAndSortBox}>
            <Input type="text" icon={searchIcon} placeholder="Поиск" className={styles.search}/>
            <div className={styles.sortBox}>
                <button className={styles.item} type="button">
                    <img src="images/icons/sort-icon-1.svg" alt="icon" className={styles.image}/>
                    <div>По популярности</div>
                </button>
                <button className={styles.item} type="button">
                    <img src="images/icons/sort-icon-2.svg" alt="icon" className={styles.image}/>
                    <div>По цене</div>
                </button>
                <button className={styles.item} type="button">
                    <img src="images/icons/sort-icon-3.svg" alt="icon" className={styles.image}/>
                    <div>По цене</div>
                </button>
            </div>
        </div>
    );
};

export default SearchAndSort;