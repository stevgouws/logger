import PropTypes from "prop-types";
import Layout from "../components/Layout";
import MainHeading from "../components/MainHeading";
import NextButton from "../components/NextButton";
import styles from "./meds.styl";
import { useState } from "react";

export default function Meds() {
  return (
    <Layout>
      <MainHeading name="meds" />
      <MedItems />
      <NextButton />
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
      amount: 500,
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
