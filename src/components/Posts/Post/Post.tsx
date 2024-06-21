import React from 'react';
import styles from './Post.module.css';

interface PostComponentProps {
    title: string;
    summary: string;
    image: string;
    link: string;
    date: string;
}

const Post: React.FC<PostComponentProps> = ({ title, summary, image, link, date }) => {
    return (
        <div className={styles['post-component']}>
            <img src={image} alt={title} className={styles['post-component-image']} />
            <div className={styles['post-component-content']}>
                <h3 className={styles['post-component-title']}>{title}</h3>
                <p className={styles['post-component-date']}>{date}</p>
                <p className={styles['post-component-summary']}>{summary}</p>
                <a href={link} className={styles['post-component-link']} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
    );
};

export default Post;
