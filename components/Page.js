import PropTypes from "prop-types";
import { useState, useContext } from "react";
import NumberGrid from "./NumberGrid";
import styles from "./Page.styl";
import Layout from "./Layout";
import NextButton from "./NextButton";
import { store } from "../store";
import MainHeading from "./MainHeading";

const Page = ({ name, nextUrl, children, onClick }) => {
  const isLastPage = nextUrl === "done";
  const { dispatch, state } = useContext(store);
  const [selectedNumber, setSelectedNumber] = useState(state[name]);

  function updateState() {
    dispatch({
      type: "UPDATE",
      payload: {
        key: name,
        value: selectedNumber,
        persist: isLastPage,
      },
    });
  }

  function Content() {
    if (children) return <div className={styles.content}>{children}</div>;
    return (
      <NumberGrid
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
    );
  }

  return (
    <Layout>
      <MainHeading name={name}>
        <div className={styles.numberBanner}>{selectedNumber}</div>
      </MainHeading>
      <Content />
      <NextButton nextUrl={nextUrl} onClick={onClick || updateState} />
    </Layout>
  );
};

Page.propTypes = {
  name: PropTypes.string.isRequired,
  nextUrl: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.any,
};

export default Page;
