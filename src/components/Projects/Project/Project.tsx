import React from 'react';
import styles from './Project.module.css'; // Import the CSS module

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
    return (
        <div className={styles.projectCard}>
            <img src={image} alt={title} className={styles.projectCardImage} />
            <div className={styles.projectCardContent}>
                <h2 className={styles.projectCardTitle}>{title}</h2>
                <p className={styles.projectCardDescription}>{description}</p>
                <a href={link} className={styles.projectCardLink} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
};

export default ProjectCard;
