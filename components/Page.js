import PropTypes from "prop-types";
import { useState } from "react";
import NumberGrid from "./NumberGrid";
import styles from "./Page.styl";
import Layout from "./Layout";

const Page = ({ name }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  return (
    <Layout>
      <h1>{name}</h1>
      <div className={styles.numberBanner}>{selectedNumber}</div>
      <NumberGrid
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
    </Layout>
  );
};

Page.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Page;
