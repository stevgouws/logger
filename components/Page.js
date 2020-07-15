import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import NumberGrid from "./NumberGrid";
import styles from "./Page.styl";
import Layout from "./Layout";
import NextButton from "./NextButton";
import { store } from "../store";

const Page = ({ name, nextUrl }) => {
  const isLastPage = nextUrl === "done";
  const [selectedNumber, setSelectedNumber] = useState(null);
  const { dispatch, state } = useContext(store);
  const router = useRouter();

  console.log("state", state);

  function updateState() {
    dispatch({
      type: "UPDATE",
      payload: {
        key: [router.route.replace("/", "")],
        value: selectedNumber,
        persist: isLastPage,
      },
    });
  }

  return (
    <Layout>
      <h1>{name}</h1>
      <div className={styles.numberBanner}>{selectedNumber}</div>
      <NumberGrid
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
      <NextButton nextUrl={nextUrl} onClick={updateState} />
    </Layout>
  );
};

Page.propTypes = {
  name: PropTypes.string.isRequired,
  nextUrl: PropTypes.string,
};

export default Page;
