// BottomBar.tsx
import React from 'react';
import styles from './BottomBar.module.css';

const BottomBar: React.FC = () => {
    return (
        <div className={styles.bottomBar}>
            <p>&copy; {new Date().getFullYear()} skipper.ws. All rights reserved.</p>
        </div>
    );
};

export default BottomBar;
