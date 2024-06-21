import React from 'react';
import './Project.module.css'; // Assuming you have some CSS for styling

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-card-image" />
            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
                <a href={link} className="project-card-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
};

export default ProjectCard;
