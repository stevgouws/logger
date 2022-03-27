import PropTypes from "prop-types";
import styles from "./NumberGrid.styl";
import { useRouter } from "next/router";
import { useContext } from "react";
import { store } from "../store";

const numbers = Array.from({ length: 100 }, (el, index) => index + 1);

const NumberGrid = ({ nextUrl, name }) => {
  const router = useRouter();
  const { dispatch, state } = useContext(store);
  const selectedNumber = state[name];
  const isLastPage = nextUrl === "done";

  function isSelected(number) {
    return number === selectedNumber;
  }

  function numberClasses(number) {
    let classes = [styles.number];
    if (isSelected(number)) classes.push(styles.selected);
    return classes.join(" ");
  }

  function updateState(selectedNumber) {
    dispatch({
      type: "UPDATE",
      payload: {
        key: name,
        value: selectedNumber,
        persist: isLastPage,
      },
    });
  }

  return (
    <div className={styles.numberGrid}>
      {numbers.map((number) => {
        return (
          <div
            key={number}
            className={numberClasses(number)}
            onClick={() => {
              updateState(number);
              router.push(`/${nextUrl}`);
            }}
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
  nextUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NumberGrid;
