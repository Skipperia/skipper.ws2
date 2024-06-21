import React from "react";

import styles from "./Projects.module.css";
import ProjectCard from "./Project/Project";
interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'Project 1',
        description: 'This is the description for project 1.',
        image: 'https://via.placeholder.com/150',
        link: 'https://example.com/project1'
    },
    {
        title: 'Project 2',
        description: 'This is the description for project 2.',
        image: 'https://via.placeholder.com/150',
        link: 'https://example.com/project2'
    },
    // Add more projects as needed
];

export const Projects: React.FC = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>projects</h2>
            <div className={styles.content}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
};
