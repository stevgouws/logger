import styles from "./NextButton.styl";
import Link from "next/link";
import { useState } from "react";

const urls = ["/", "/thoracic", "/", "thoracic"];

export const getNextUrl = () => {
  return "test";
};

const NextButton = () => {
  const [currentUrl, setCurrentUrl] = useState("/");

  return (
    <Link href={getNextUrl()}>
      <a className={styles.nextButton}>Next</a>
    </Link>
  );
};

export default NextButton;
