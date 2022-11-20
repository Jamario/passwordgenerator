import { describe, expect, test } from "vitest";
import { estimatePasswordStrength } from "./passwords";
import { IndicatorStrengths } from '../enums';

describe("Password logic", () => {
    describe("estimatePasswordStrength", () => {
        test("returns a 'too weak' strength indicator", () => {
            const password = "12345";
            const expectedValue = IndicatorStrengths.TOO_WEAK;
            const actualValue = estimatePasswordStrength(password);

            expect(actualValue).toBe(expectedValue);
        });

        test("returns a 'strong' strength indicator", () => {
            const password = "5^PX(yZHN)W1";
            const expectedValue = IndicatorStrengths.STRONG;
            const actualValue = estimatePasswordStrength(password);
            expect(actualValue).toBe(expectedValue);
        });

        test("returns a 'medium' strength indicator", () => {
            const password = "AS2s3lw4Eu";
            const expectedValue = IndicatorStrengths.MEDIUM;
            const actualValue = estimatePasswordStrength(password);
            expect(actualValue).toBe(expectedValue);
        });

        test("returns a 'weak' strength indicator", () => {
            const password = "inzKtlbrpD";
            const expectedValue = IndicatorStrengths.WEAK;
            const actualValue = estimatePasswordStrength(password);
            expect(actualValue).toBe(expectedValue);
        });
    });
});
