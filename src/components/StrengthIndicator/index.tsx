import styles from "./index.module.css";
import { IndicatorStrengths } from "../../assets/utils/enums";

const StrengthIndicator = (): JSX.Element => {
    const passwordStrength = IndicatorStrengths.MEDIUM;

    const getBarsClassName = (): string => {
        return styles.medium;
    };

    const getBars = (): JSX.Element[] => {
        const bars: JSX.Element[] = [];
        for (let i = 0; i < 4; i++) {
            let className: string;

            if (i < passwordStrength.valueOf()) className = `${styles.bar} ${styles.active}`;
            else className = styles.bar;

            bars.push(<div className={className} key={i} />);
        }
        return bars;
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>Strength</div>
            <div className={styles.guage}>
                <div>Medium</div>
                <div className={`${styles.bars} ${getBarsClassName()}`}>{getBars()}</div>
            </div>
        </div>
    );
};

export default StrengthIndicator;
