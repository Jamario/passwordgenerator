import React, { useState } from "react";
import { CheckboxValuesType } from "../../types";
import { FormValuesType, verifyCheckboxes } from "./utils";
import { IndicatorStrengths } from "../../enums";
import { generatePassword, estimatePasswordStrength } from "../../logic/passwords";

import styles from "./index.module.css";
import arrowImage from "../../assets/images/icon-arrow-right.svg";
import checkmarkImage from "../../assets/images/icon-check.svg";

import StrengthIndicator from "../StrengthIndicator";

interface CheckboxProps {
    id: string;
    name: string;
    label: string;
    checked: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ id, name, label, checked, handleChange }: CheckboxProps): JSX.Element => {
    return (
        <label htmlFor={id} className={styles.checkboxContainer}>
            <input type="checkbox" id={id} name={name} onChange={handleChange} checked={checked} />
            <div className={styles.checkmark}>
                <img src={checkmarkImage} />
            </div>
            {label}
        </label>
    );
};

interface FormProps {
    updatePassword: (password: string) => void;
}

const Form = ({ updatePassword }: FormProps): JSX.Element => {
    const [passwordLength, setPasswordLength] = useState(8);
    const [passwordStrength, setPasswordStrength] = useState<IndicatorStrengths | null>(null);
    const [formValues, setFormValues] = useState<FormValuesType>({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });

    const { uppercase, lowercase, numbers, symbols } = formValues;

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const isValid = verifyCheckboxes(formValues);

        const config: CheckboxValuesType = {
            includeUpper: uppercase,
            includeLower: lowercase,
            includeNumbers: numbers,
            includeSymbols: symbols,
        };

        if (isValid) {
            const newPassword = generatePassword(passwordLength, config);
            const estimatedPasswordStrength = estimatePasswordStrength(newPassword);
            setPasswordStrength(estimatedPasswordStrength);
            updatePassword(newPassword);
        }
    };

    const handlePasswordLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const length = parseInt(e.target.value, 10);

        setPasswordLength(length);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFormValues = { ...formValues };
        const name = e.target.name;
        const currentCheckedValue = formValues[name];

        if (currentCheckedValue === undefined) {
            newFormValues[name] = false;
        } else {
            newFormValues[name] = !currentCheckedValue;
        }

        setFormValues(newFormValues);
    };

    return (
        <div className={styles.container}>
            <div className={styles.characterLength}>
                <div>Character Length</div>
                <span>{passwordLength}</span>
            </div>

            <form id="strengthForm" className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.slider}>
                    <input
                        type="range"
                        min={0}
                        max={18}
                        defaultValue={passwordLength}
                        onChange={handlePasswordLengthChange}
                    />
                </div>
                <Checkbox
                    id="uppercaseCheckbox"
                    name="uppercase"
                    label="Include Uppercase Letters"
                    checked={uppercase}
                    handleChange={handleChange}
                />
                <Checkbox
                    id="lowercaseCheckbox"
                    name="lowercase"
                    label="Include Lowercase Letters"
                    checked={lowercase}
                    handleChange={handleChange}
                />
                <Checkbox
                    id="numbersCheckbox"
                    name="numbers"
                    label="Include Numbers"
                    checked={numbers}
                    handleChange={handleChange}
                />
                <Checkbox
                    id="symbolsCheckbox"
                    name="symbols"
                    label="Include Symbols"
                    checked={symbols}
                    handleChange={handleChange}
                />
            </form>
            <StrengthIndicator passwordStrength={passwordStrength} />
            <button form="strengthForm" className={styles.submitButton}>
                Generate
                {/* <img src={arrowImage} alt="Right arrow" /> */}
                <svg className={styles.copyIcon} width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
                </svg>
            </button>
        </div>
    );
};

export default Form;
