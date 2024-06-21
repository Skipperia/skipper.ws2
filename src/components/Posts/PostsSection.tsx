import React from 'react';
import Post from './Post/Post';
import styles from './PostsSection.module.css'; // Assuming you have some CSS for styling

interface Post {
    title: string;
    summary: string;
    image: string;
    link: string;
    date: string;
}

interface PostSectionProps {
    posts: Post[];
}

const posts = [
    {
        title: 'Post 1',
        summary: 'This is the summary for post 1.',
        image: 'https://via.placeholder.com/150',
        link: 'https://example.com/post1',
        date: 'January 1, 2024'
    },
    {
        title: 'Post 2',
        summary: 'This is the summary for post 2.',
        image: 'https://via.placeholder.com/150',
        link: 'https://example.com/post2',
        date: 'February 1, 2024'
    },
    // Add more posts as needed
];

const PostSection: React.FC<PostSectionProps> = () => {
    return (
        
        <div className={styles.container}>
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
    );
};

export default PostSection;
