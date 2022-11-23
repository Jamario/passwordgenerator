import { useState } from "react";

import styles from "./index.module.css";

interface AppProps {
    generatedPassword: string | null;
}

const PasswordOutput = ({ generatedPassword }: AppProps): JSX.Element => {
    const [timeoutRef, setTimeoutRef] = useState<number | null>(null);
    const [displayNotification, setDisplayNotification] = useState(false);

    const hasPassword = generatedPassword !== null;
    const password = generatedPassword || "P4$5W0rD!";

    const showNotification = () => {
        setDisplayNotification(true);

        if (timeoutRef !== null) {
            window.clearTimeout(timeoutRef);
        }

        const ref = window.setTimeout(() => {
            console.log("timeout elapsed");
            setDisplayNotification(false);
        }, 700);

        setTimeoutRef(ref);
    };

    const handleCopyClick = () => {
        if (hasPassword) {
            navigator.clipboard.writeText(password);
            showNotification();
        }
    };

    return (
        <div className={styles.container}>
            <span className={`${styles.password} ${!hasPassword && styles.passwordFaded}`}>{password}</span>
            <div className={styles.right}>
                <span className={`${styles.copied} ${displayNotification ? styles.show : styles.hide}`}>Copied</span>
                <span onClick={handleCopyClick}>
                    <svg className={styles.copyIcon} width="21" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default PasswordOutput;
