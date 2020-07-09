import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import NumberGrid from "./NumberGrid";
import styles from "./Page.styl";
import Layout from "./Layout";
import NextButton from "./NextButton";
import { store } from "../store";

const Page = ({ name, nextUrl }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const { dispatch, state } = useContext(store);
  const router = useRouter();

  console.log("state", state);

  function save() {
    console.log("save");
    console.log(name);
    dispatch({
      type: "SAVE",
      payload: {
        key: [router.route.replace("/", "")],
        value: selectedNumber,
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
      <NextButton nextUrl={nextUrl} save={save} />
    </Layout>
  );
};

Page.propTypes = {
  name: PropTypes.string.isRequired,
  nextUrl: PropTypes.string,
};

export default Page;
