import { CheckboxValuesType } from '../types';

const UPPERCASE="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijsklmnopqrstuvwxyz";
const NUMBERS = "1234567890";
const SYMBOLS = "!#$%^&)+({}~-=";

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