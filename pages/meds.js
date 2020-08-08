import PropTypes from "prop-types";
import Layout from "../components/Layout";
import MainHeading from "../components/MainHeading";
import NextButton from "../components/NextButton";
import styles from "./meds.styl";

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
  return (
    <div className={styles.counter}>
      <Deviation symbol="-" /> 0 <Deviation symbol="+" />
    </div>
  );
};

const Deviation = ({ symbol }) => {
  return <span className={styles.deviation}>{symbol}</span>;
};

Deviation.propTypes = {
  symbol: PropTypes.string.isRequired,
};
