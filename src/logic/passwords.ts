import { CheckboxValuesType } from '../types';
import { IndicatorStrengths } from '../enums';

const UPPERCASE="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijsklmnopqrstuvwxyz";
const NUMBERS = "1234567890";
const SYMBOLS = "!#$%^&)+({}~=-";

export function generatePassword(characterLength: number, config: CheckboxValuesType ): string{
    const { includeLower, includeUpper, includeNumbers, includeSymbols} = config;

    let finalString = "";
    let password = "";

    if(includeLower) finalString += LOWERCASE;
    if(includeUpper) finalString += UPPERCASE;
    if(includeNumbers) finalString += NUMBERS;
    if(includeSymbols) finalString += SYMBOLS;

    const stringLength = finalString.length;

    for(let i=0; i<characterLength; i++){
        const index = Math.floor(Math.random() * stringLength);
        password += finalString[index];
    }

    return password;
}

/**
 * Estimate password strength via regular expression tests
 * 
 * Criteria:
 * Too weak
 *  - under 8 characters
 * Strong passwords
 *  - includes numbers, lowercase, uppercase, symbols and has at least 10 characters
 *  - includes numbers, lowercase, uppercase, and has at least 12 characters
 * 
 * Medium password
 *  - not strong but includes numbers, lowercase, uppercase, symbols and has at least 8 characters
 *  - includes numbers, lowercase, uppercase and has at least 11 characters
 * 
 * Weak
 *  - neither strong nor medium. 
 */
export function estimatePasswordStrength(password: string): IndicatorStrengths{
    const strong1 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%^&)+({}~=-])[a-zA-z0-9!#$%^&)+({}~=-]{10,}/  
    const strong2 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-z0-9]{12,}/
    const medium1 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%^&)+({}~=-])[a-zA-z0-9!#$%^&)+({}~=-]{8,}/;
    const medium2 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-z0-9]{10,}/;

    const passwordLength = password.length;


    if(passwordLength <= 7) return IndicatorStrengths.TOO_WEAK;

    if(strong1.test(password) || strong2.test(password)) return IndicatorStrengths.STRONG;

    if(medium1.test(password) || medium2.test(password)) return IndicatorStrengths.MEDIUM;

    return IndicatorStrengths.WEAK;
}
