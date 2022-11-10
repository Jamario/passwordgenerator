import styles from "./index.module.css";
import arrowImage from "../../assets/images/icon-arrow-right.svg";
import checkmarkImage from "../../assets/images/icon-check.svg";

import StrengthIndicator from "../StrengthIndicator";

interface CheckboxProps {
    id: string;
    name: string;
    value: string;
    label: string;
}

const Checkbox = ({ id, name, value, label }: CheckboxProps): JSX.Element => {
    return (
        <label htmlFor={id} className={styles.checkboxContainer}>
            <input type="checkbox" id={id} name={name} value={value} />
            <div className={styles.checkmark}>
                <img src={checkmarkImage} />
            </div>
            {label}
        </label>
    );
};

const Form = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.characterLength}>
                <div>Character Length</div>
                <span>10</span>
            </div>

            <form id="strengthForm" className={styles.form}>
                <div className={styles.slider}>
                    <input type="range" min={0} max={22} defaultValue={8} />
                </div>
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
