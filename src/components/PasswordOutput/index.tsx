import styles from "./index.module.css";
import copyIcon from "../../assets/images/icon-copy.svg";

const PasswordOutput = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <span className={styles.password}>PTx1f5DaFX</span>
            <img src={copyIcon} alt="Copy" />
        </div>
    );
};

export default PasswordOutput;
