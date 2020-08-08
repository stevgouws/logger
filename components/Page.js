import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import NumberGrid from "./NumberGrid";
import styles from "./Page.styl";
import Layout from "./Layout";
import NextButton from "./NextButton";
import { store } from "../store";
import MainHeading from "./MainHeading";

const Page = ({ name, nextUrl }) => {
  const isLastPage = nextUrl === "done";
  const { dispatch, state } = useContext(store);
  console.log("name", name);
  console.log("state", state);
  console.log("state[name]", state[name]);
  const [selectedNumber, setSelectedNumber] = useState(state[name]);
  const router = useRouter();

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
      <MainHeading name={name}>
        <div className={styles.numberBanner}>{selectedNumber}</div>
      </MainHeading>
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
