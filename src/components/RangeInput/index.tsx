import { useRef, useEffect } from "react";
import styles from "./index.module.css";

interface RangeInputProps {
    value: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    max?: number;
    min?: number;
}

const RangeInput = ({ value, handleChange, min = 0, max = 18 }: RangeInputProps): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const element = inputRef.current;

        if (element !== null) {
            element.style.setProperty("--val", value.toString());
            element.style.setProperty("--max", max.toString());
            element.style.setProperty("--min", min.toString());
        }
    }, [value]);

    return (
        <div className={styles.slider}>
            <input type="range" min={min} max={max} value={value} onChange={handleChange} ref={inputRef} />
        </div>
    );
};

export default RangeInput;
