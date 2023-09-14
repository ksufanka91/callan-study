import {useState} from "react";
import styles from "./Posts.module.scss";

import Button from "../Button/Button";


const Posts = ({items, mainTitle}) => {
    let arrowIcon =
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.9653 8.86969C13.9133 8.74508 13.792 8.66376 13.6574 8.66376H10.006V0.333232C10.006 0.149294 9.85667 0 9.67273 0H4.34117C4.15723 0 4.00794 0.149294 4.00794 0.333232V8.66379H0.342507C0.207895 8.66379 0.0865923 8.74511 0.0346097 8.86907C-0.0167169 8.99368 0.0112736 9.13698 0.106586 9.23229L6.75436 15.9021C6.817 15.9647 6.90166 16 6.99029 16C7.07891 16 7.16357 15.9647 7.22621 15.9027L13.8933 9.23295C13.9886 9.1376 14.0173 8.99434 13.9653 8.86969Z"
                fill="white"/>
        </svg>

    const [posts, setPosts] = useState(items);

    return (
        <div className={styles.posts}>
            <h1 className="visuallyHidden">{mainTitle}</h1>
            <h2 className={styles.mainTitle}>{mainTitle}</h2>

            <div className={styles.box}>
                {posts.map(item => (
                    <div className={styles.item} key={item.id}>
                        <img src={item.image} alt={item.title} className={styles.image}/>
                        <div className={styles.textBox}>
                            <div className={styles.title}>
                                {item.title}
                            </div>

                            <div className={styles.text}>
                                {item.text}
                            </div>

                            <div className={styles.moreInfoBox}>
                                <img src={item.icon} alt="icon"/>
                                <div dangerouslySetInnerHTML={{__html: item.moreInfo}}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.buttonBox}>
                <Button icon={arrowIcon} className={styles.button} onClick={() => {
                    // в будущем здесь будет запрос к бекенду, пока просто эмуляция работы пагинации
                    setPosts([...posts, ...items]);
                }}>Еще</Button>
            </div>
        </div>
    );
};

export default Posts;