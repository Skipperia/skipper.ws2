import React from 'react';
import Post from './Post/Post';
import styles from './PostsSection.module.css'; // Assuming you have some CSS for styling
import { getImageUrl } from '../../utils/requestUtils';

interface Post {
    title: string;
    summary: string;
    image: string;
    link: string;
    date: string;
}

const posts = [
    {
        title: 'What the hell am I talking about?',
        summary: 'A detailed post regarding the none sense I am preaching about',
        image: getImageUrl("89095399.jpg"),
        link: 'https://example.com/post1',
        date: 'January 1, 2024'
    },
    {
        title: 'Post 2',
        summary: 'This is the summary for post 2.',
        image: getImageUrl("89095399.jpg"),
        link: 'https://example.com/post2',
        date: 'February 1, 2024'
    },
    // Add more posts as needed
];

const PostSection: React.FC = () => {
    return (
        <section id='posts'>
            <div className={styles.container}>
                <h2 className={styles.title}>posts</h2>
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        title={post.title}
                        summary={post.summary}
                        image={post.image}
                        link={post.link}
                        date={post.date}
                    />
                ))}
            </div>
        </section>
    );
};

export default PostSection;
