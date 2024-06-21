import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils/requestUtils";

export const About: React.FC = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>about</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("me.jpg")}
                    className={styles.aboutImage}
                />
                <div className={styles.aboutItems}>
                    <h1>
                        My name is Alex but everyone calls me Skipper
                    </h1>
                    <p>
                        I code stuff every now and then
                    </p>
                    <p>
                    </p>
                </div>
            </div>
        </section>
    );
};
