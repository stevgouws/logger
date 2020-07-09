import styles from "./NextButton.styl";
import Link from "next/link";
import { useRef } from "react";

const urls = ["/", "/thoracic", "/typography"];

export const getNextUrl = ({ urls, currentUrl }) => {
  const currentUrlIndex = urls.indexOf(currentUrl);
  const nextUrlIndex = currentUrlIndex + 1;
  const isLastUrl = nextUrlIndex === urls.length;
  if (isLastUrl) return currentUrl;
  return urls[nextUrlIndex];
};

const NextButton = () => {
  console.log("rendering NextButton");
  let currentUrlRef = useRef("/");
  console.log("currentUrlRef", currentUrlRef);
  const nextUrl = getNextUrl({ urls, currentUrl: currentUrlRef.current });
  console.log("nextUrl", nextUrl);

  return (
    <div
      onClick={() => {
        console.log("on click");
        const random = Math.random();
        currentUrlRef.current = random;
        console.log(`after updating ref to ${random}`);
      }}
    >
      <Link href={nextUrl}>
        <a className={styles.nextButton}>Next {currentUrlRef.current}</a>
      </Link>
    </div>
  );
};

export default NextButton;
