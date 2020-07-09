import PropTypes from "prop-types";
import { useState } from "react";
import NumberGrid from "./NumberGrid";
import styles from "./Page.styl";
import Layout from "./Layout";
import NextButton from "./NextButton";

const Page = ({ name, nextUrl }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  return (
    <Layout>
      <h1>{name}</h1>
      <div className={styles.numberBanner}>{selectedNumber}</div>
      <NumberGrid
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
      <NextButton nextUrl={nextUrl} />
    </Layout>
  );
};

Page.propTypes = {
  name: PropTypes.string.isRequired,
  nextUrl: PropTypes.string,
};

export default Page;
