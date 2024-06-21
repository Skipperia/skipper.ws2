import React from 'react';
import './Post.module.css'; 

interface PostComponentProps {
    title: string;
    summary: string;
    image: string;
    link: string;
    date: string;
}

const Post: React.FC<PostComponentProps> = ({ title, summary, image, link, date }) => {
    return (
        <div className="post-component">
            <img src={image} alt={title} className="post-component-image" />
            <div className="post-component-content">
                <h3 className="post-component-title">{title}</h3>
                <p className="post-component-date">{date}</p>
                <p className="post-component-summary">{summary}</p>
                <a href={link} className="post-component-link" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
    );
};

export default Post;
