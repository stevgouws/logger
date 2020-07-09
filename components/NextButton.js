import PropTypes from "prop-types";
import styles from "./NextButton.styl";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
const NextButton = ({ nextUrl = "" }) => {
  const router = useRouter();
  const valuesRef = useRef({});
  function save() {
    console.log("save");
    valuesRef.current[router.route.replace("/", "")] = "test";
    console.log(valuesRef.current);
  }

  return (
    <div className={styles.nextButton}>
      <div onClick={() => router.back()}>Back</div>
      <Link href={nextUrl}>
        <a onClick={save}>Next</a>
      </Link>
    </div>
  );
};

NextButton.propTypes = {
  nextUrl: PropTypes.string,
};

export default NextButton;
