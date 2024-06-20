import React, { useState } from 'react';
import styles from './ContactModal.module.css';

const ContactModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    return (
        <div className={styles.contactModalWrapper} onMouseLeave={handleMouseLeave}>
            <button
                className={styles.contactButton}
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={handleMouseEnter}
            >
                ↓Contact
            </button>
            {isOpen && (
                <div className={styles.contactModal}>
                    <a href="mailto:example@example.com" className={styles.contactLink}>
                        <img className={styles.icon}></img>
                        <span>Email Us</span>

                    </a>
                    <a href="tel:+1234567890" className={styles.contactLink}>
                        <img className={styles.icon}></img>
                        <span>Email Us</span>
                    </a>

                    <a href="/contact-form" className={styles.contactLink}>
                        <img className={styles.icon}></img>
                        <span>Email Us</span>
                    </a>
                </div>
            )}
        </div>
    );
};

export default ContactModal;
