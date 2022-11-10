import styles from "./index.module.css";
import copyIcon from "../../assets/images/icon-copy.svg";

/**TODO
 * Replace the copy image with the svg
 * Update the fill of the svg on hover ~ see designs
 * Change the colors of the password text when no password is generated
 */
const PasswordOutput = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <span className={styles.password}>P4$5W0rD!</span>
            <img src={copyIcon} alt="Copy" />
        </div>
    );
};

export default PasswordOutput;
