import styles from "./NumberGrid.styl";

const numbers = Array.from({ length: 100 }, (el, index) => index + 1);
const NumberGrid = () => {
  return (
    <div className={styles.numberGrid}>
      {numbers.map((n) => {
        return (
          <div key={n} className={styles.number}>
            {n}
          </div>
        );
      })}
    </div>
  );
};

export default NumberGrid;
