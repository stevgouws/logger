import PropTypes from "prop-types";
import Layout from "../components/Layout";
import MainHeading from "../components/MainHeading";
import NextButton from "../components/NextButton";
import styles from "./meds.styl";
import { useState, useContext } from "react";
import { store } from "../store";

export default function Meds() {
  const { dispatch, state } = useContext(store);

  function updateState() {
    dispatch({
      type: "UPDATE",
      payload: {
        key: "meds",
        value: ["one", 2, 3],
      },
    });
  }

  return (
    <Layout>
      <MainHeading name="meds" />
      <MedItems />
      <NextButton nextUrl="save" onClick={updateState} />
    </Layout>
  );
}

const MedItems = () => {
  const medItems = [
    {
      name: "Paracetamol",
      amount: 1000,
      unit: "mg",
    },
    {
      name: "Ibuprofen",
      amount: 600,
      unit: "mg",
    },
  ];

  return (
    <div>
      {medItems.map((item) => (
        <MedItem {...item} key={item.name} />
      ))}
    </div>
  );
};

const MedItem = ({ name, amount, unit }) => {
  return (
    <div className={styles.medItem}>
      <div>
        {name} {amount} {unit}
      </div>
      <Counter />
    </div>
  );
};

MedItem.propTypes = {
  amount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

const Counter = () => {
  const [count, setCount] = useState(0);

  function decrement() {
    if (count < 1) return;
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className={styles.counter}>
      <Deviation symbol="-" onClick={decrement} />
      {count}
      <Deviation symbol="+" onClick={increment} />
    </div>
  );
};

const Deviation = ({ symbol, onClick }) => {
  return (
    <span className={styles.deviation} onClick={onClick}>
      {symbol}
    </span>
  );
};

Deviation.propTypes = {
  onClick: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
};
