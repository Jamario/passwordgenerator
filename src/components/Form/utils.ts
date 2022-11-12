export interface FormValuesType {
    [index: string]: boolean;
}

export function verifyCheckboxes(checkboxValues: FormValuesType): boolean {
    let isValid = true;

    const values = Object.values(checkboxValues);

    if(values.length <= 0) isValid = false;

    /**
     * The checkbox values are valid if at least one is true.
     */
    isValid = values.some((value) => value);

    return isValid;
}