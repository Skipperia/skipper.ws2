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
        description: 'Oldschool runescpae plugin to display monster hp/percentages overlay written in Java for the runeLite platform.',
        image: getImageUrl("osrsimg.png"),
        link: 'https://github.com/Skipperia/MonsterHP'
    },
    {
        title: 'some proj 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit odio, efficitur eu lacinia et, maximus at tellus. Vivamus semper ut magna vel vestibulum. Nulla ut pulvinar lectus, a accumsan velit. Aliquam efficitur nisl ut neque rutrum bibendum. Proin ut elit lacus. Mauris aliquam velit vitae tellus cursus, et accumsan lectus efficitur. Nullam et sapien sit amet augue pellentesque fermentum vel sed turpis. Mauris congue sapien et lorem dapibus mattis. Integer sit amet semper lorem. Phasellus lorem erat, egestas vitae pretium faucibus, fermentum et est. In at ornare nibh, id pharetra neque. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        image: getImageUrl("89095399.jpg"),
        link: 'https://example.com/project2'
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit odio, efficitur eu lacinia et, maximus at tellus. Vivamus semper ut magna vel vestibulum. Nulla ut pulvinar lectus, a accumsan velit. Aliquam efficitur nisl ut neque rutrum bibendum. Proin ut elit lacus. Mauris aliquam velit vitae tellus cursus, et accumsan lectus efficitur. Nullam et sapien sit amet augue pellentesque fermentum vel sed turpis. Mauris congue sapien et lorem dapibus mattis. Integer sit amet semper lorem. Phasellus lorem erat, egestas vitae pretium faucibus, fermentum et est. In at ornare nibh, id pharetra neque. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
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
                <a href="https://github.com/Skipperia" target="_blank" className={styles.bottomtext}>github for more</a>
            </div >
        </section>
    );
};
