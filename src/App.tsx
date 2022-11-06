import styles from "./app.module.css";

import PasswordOutput from "./components/PasswordOutput";
import Form from "./components/Form";

const App = (): JSX.Element => {
    return (
        <main className={`${styles.container} theme-body`}>
            <div className={styles.generator}>
                <header className={styles.header}>Password Generator</header>
                <PasswordOutput />
                <Form />
            </div>
        </main>
    );
};

export default App;
