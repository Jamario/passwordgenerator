import styles from "./index.module.css";
import copyIcon from "../../assets/images/icon-copy.svg";

interface AppProps {
    generatedPassword: string | null;
}

/**TODO
 * Replace the copy image with the svg
 * Update the fill of the svg on hover ~ see designs
 * Change the colors of the password text when no password is generated
 */
const PasswordOutput = ({ generatedPassword }: AppProps): JSX.Element => {
    const password = generatedPassword || "P4$5W0rD!";

    return (
        <div className={styles.container}>
            <span className={styles.password}>{password}</span>
            <img src={copyIcon} alt="Copy" />
        </div>
    );
};

export default PasswordOutput;
