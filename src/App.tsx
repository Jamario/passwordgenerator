import { useState } from "react";

import styles from "./app.module.css";

import PasswordOutput from "./components/PasswordOutput";
import Form from "./components/Form";

const App = (): JSX.Element => {
    const [generatedPassword, setGeneratedPassword] = useState<string | null>(null);

    const updatePassword = (password: string | null) => {
        setGeneratedPassword(password);
    };

    return (
        <main className={`${styles.container} theme-body`}>
            <div className={styles.generator}>
                <header className={styles.header}>Password Generator</header>
                <PasswordOutput generatedPassword={generatedPassword} />
                <Form updatePassword={updatePassword} />
            </div>
        </main>
    );
};

export default App;
