import PropTypes from "prop-types";
import { useState, useContext } from "react";
import NumberGrid from "./NumberGrid";
import styles from "./Page.styl";
import Layout from "./Layout";
import NextButton from "./NextButton";
import { store } from "../store";
import MainHeading from "./MainHeading";

const Page = ({ name, nextUrl, children, hideNav }) => {
  const { state } = useContext(store);
  const selectedNumber = state[name];

  function Content() {
    if (children) return <div className={styles.content}>{children}</div>;
    return <NumberGrid nextUrl={nextUrl} name={name} />;
  }

  return (
    <Layout>
      <MainHeading name={name}>
        <div className={styles.numberBanner}>{selectedNumber}</div>
      </MainHeading>
      <Content />
      {!hideNav && <NextButton nextUrl={nextUrl} />}
    </Layout>
  );
};

Page.propTypes = {
  name: PropTypes.string.isRequired,
  nextUrl: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.any,
  hideNav: PropTypes.bool,
};

export default Page;
