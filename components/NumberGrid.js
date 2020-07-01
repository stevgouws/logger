import styles from "./NumberGrid.styl";
import { useState } from "react";

const numbers = Array.from({ length: 100 }, (el, index) => index + 1);

const NumberGrid = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  function isSelected(number) {
    return number === selectedNumber;
  }
  return (
    <div className={styles.numberGrid}>
      {numbers.map((number) => {
        return (
          <div
            key={number}
            className={`${styles.number} ${
              isSelected(number) ? styles.selected : ""
            }`.trim()}
            onClick={() => setSelectedNumber(number)}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
};

export default NumberGrid;
