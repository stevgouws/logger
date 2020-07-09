import PropTypes from "prop-types";
import styles from "./NextButton.styl";
import Link from "next/link";
import { useRouter } from "next/router";
const NextButton = ({ nextUrl = "" }) => {
  const router = useRouter();
  return (
    <div className={styles.nextButton}>
      <div onClick={() => router.back()}>Back</div>
      <Link href={nextUrl}>
        <a>Next</a>
      </Link>
    </div>
  );
};

NextButton.propTypes = {
  nextUrl: PropTypes.string,
};

export default NextButton;
