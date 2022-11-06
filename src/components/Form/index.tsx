import styles from "./index.module.css";
import arrowImage from "../../assets/images/icon-arrow-right.svg";

import StrengthIndicator from "../StrengthIndicator";

interface CheckboxProps {
    id: string;
    name: string;
    value: string;
    label: string;
}

const Checkbox = ({ id, name, value, label }: CheckboxProps): JSX.Element => {
    return (
        <div className={styles.checkboxContainer}>
            <input type="checkbox" id={id} name={name} value={value} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

const Form = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.characterLength}>
                <div>Character Length</div>
                <span>10</span>
            </div>

            <div className={styles.slider}>
                <div className={styles.circle} />
            </div>

            <form id="strengthForm" className={styles.form}>
                <Checkbox id="uppercaseCheckbox" name="uppercase" value="yes" label="Include Uppercase Letters" />
                <Checkbox id="lowercaseCheckbox" name="lowercase" value="yes" label="Include Lowercase Letters" />
                <Checkbox id="numbersCheckbox" name="numbers" value="yes" label="Include Numbers" />
                <Checkbox id="symbolsCheckbox" name="symbols" value="yes" label="Include Symbols" />
            </form>
            <StrengthIndicator />
            <button form="strengthForm" className={styles.submitButton}>
                Generate
                <img src={arrowImage} alt="Right arrow" />
            </button>
        </div>
    );
};

export default Form;
