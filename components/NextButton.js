import PropTypes from "prop-types";
import styles from "./NextButton.styl";
import Link from "next/link";
import { useRouter } from "next/router";
const NextButton = ({ nextUrl = "", onClick, primaryText }) => {
  const router = useRouter();

  return (
    <div className={styles.nextButton}>
      <div onClick={() => router.back()}>Back</div>
      <Link href={nextUrl}>
        <a onClick={onClick}>{primaryText}</a>
      </Link>
    </div>
  );
};

NextButton.propTypes = {
  nextUrl: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  primaryText: PropTypes.string,
};

NextButton.defaultProps = {
  primaryText: "Next",
};

export default NextButton;
