import React from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils/requestUtils';
import ContactModal from '../ContactModal/ContactModal';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.homeLink}>
                <div className={styles.brand}>
                    <img src={getImageUrl("89095399.jpg")} alt="Site Icon" className={styles.icon} />
                    <h1 className={styles.title}>skipper.ws</h1>
                </div>
            </a>
            <div className={styles.links}>
                <ContactModal />
                <a href="https://github.com/Skipperia" target="_blank"
                    className={styles.link}>github</a>
                <a href="/about" className={styles.link}>about</a>
            </div>
        </nav>
    );
};

export default Navbar;
