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

  async function getEnv() {
    await fetch("/api/env", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  }

  function save() {
    dispatch({
      type: "SAVE",
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
      <button onClick={getEnv}>env</button>
      <div className={styles.numberBanner}>{selectedNumber}</div>
      <NumberGrid
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
      <NextButton nextUrl={nextUrl} onClick={save} />
    </Layout>
  );
};

Page.propTypes = {
  name: PropTypes.string.isRequired,
  nextUrl: PropTypes.string,
};

export default Page;
