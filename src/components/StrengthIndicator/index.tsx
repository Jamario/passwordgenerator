import styles from "./index.module.css";
import { IndicatorStrengths } from "../../enums";

interface StrengthIndicatorProps {
    passwordStrength: IndicatorStrengths | null;
}

const StrengthIndicator = ({ passwordStrength }: StrengthIndicatorProps): JSX.Element => {
    const getBarsClassName = (): string => {
        switch (passwordStrength) {
            case IndicatorStrengths.WEAK:
                return styles.weak;
            case IndicatorStrengths.MEDIUM:
                return styles.medium;
            case IndicatorStrengths.STRONG:
                return styles.strong;
            case IndicatorStrengths.TOO_WEAK:
            default:
                return styles.tooWeak;
        }
    };

    const getBars = (): JSX.Element[] => {
        const bars: JSX.Element[] = [];
        for (let i = 0; i < 4; i++) {
            let className: string;

            if (passwordStrength !== null && i <= passwordStrength.valueOf())
                className = `${styles.bar} ${styles.active}`;
            else className = styles.bar;

            bars.push(<div className={className} key={i} />);
        }
        return bars;
    };

    const getEnumKey = (): string => {
        if (passwordStrength === null) return "";
        return IndicatorStrengths[passwordStrength];
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>Strength</div>
            <div className={styles.guage}>
                <div>{getEnumKey()}</div>
                <div className={`${styles.bars} ${getBarsClassName()}`}>{getBars()}</div>
            </div>
        </div>
    );
};

export default StrengthIndicator;
