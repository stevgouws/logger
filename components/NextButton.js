import PropTypes from "prop-types";
import styles from "./NextButton.styl";
import Link from "next/link";
import { useRouter } from "next/router";
const NextButton = ({ nextUrl = "", save }) => {
  const router = useRouter();

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
  save: PropTypes.func.isRequired,
};

export default NextButton;
