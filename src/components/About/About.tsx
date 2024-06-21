import React from "react";

import styles from "./About.module.css";


export const About: React.FC = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>about</h2>
            <div className={styles.content}>
                <p>
                    I code stuff
                </p>
            </div>
        </section>
    );
};
