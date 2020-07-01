import PropTypes from "prop-types";
import styles from "./NumberGrid.styl";

const numbers = Array.from({ length: 100 }, (el, index) => index + 1);

const NumberGrid = ({ selectedNumber, setSelectedNumber }) => {
  function isSelected(number) {
    return number === selectedNumber;
  }

  function numberClasses(number) {
    let classes = [styles.number];
    if (isSelected(number)) classes.push(styles.selected);
    return classes.join(" ");
  }

  return (
    <div className={styles.numberGrid}>
      {numbers.map((number) => {
        return (
          <div
            key={number}
            className={numberClasses(number)}
            onClick={() => setSelectedNumber(number)}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
};

NumberGrid.propTypes = {
  selectedNumber: PropTypes.number,
  setSelectedNumber: PropTypes.func.isRequired,
};

export default NumberGrid;
