import React from "react";

import styles from "./Projects.module.css";
import ProjectCard from "./Project/Project";
import { getImageUrl } from "../../utils/requestUtils";
interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'mobHP osrs plugin',
        description: 'fixed its issues with runelite',
        image: getImageUrl("89095399.jpg"),
        link: 'https://github.com/Skipperia/MonsterHP'
    },
    {
        title: 'Project 2',
        description: 'This is the descriptionaaaaaaaaaa.',
        image: getImageUrl("89095399.jpg"),
        link: 'https://example.com/project2'
    },
    {
        title: 'Project 2',
        description: 'This is the descriptionaaaaaaa.',
        image: getImageUrl("89095399.jpg"),
        link: 'https://example.com/project2'
    }
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
            <div>
                <a href="https://github.com/Skipperia" target="_blank" className={styles.bottomtext}>check my github for more</a>
            </div >
        </section>
    );
};
