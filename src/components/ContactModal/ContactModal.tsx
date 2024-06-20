import React, { useState } from 'react';
import styles from './ContactModal.module.css';
import { getImageUrl } from '../../utils/requestUtils';

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
                ↓contact
            </button>
            {isOpen && (
                <div className={styles.contactModal}>
                    <a href="mailto:kippera27@gmail.com" className={styles.contactLink}>
                        <img src={getImageUrl("150897750_10507049.png")} className={styles.icon}></img>
                        <span>email me</span>

                    </a>
                    <a href="tel:+972-50-9365065" className={styles.contactLink}>
                        <img src={getImageUrl("phone.png")} className={styles.icon}></img>
                        <span>call me maybe</span>
                    </a>
                </div>
            )}
        </div>
    );
};

export default ContactModal;
