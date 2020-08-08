import PropTypes from "prop-types";
import styles from "./MainHeading.styl";

const MainHeading = ({ name, children }) => {
  return (
    <div className={styles.topRow}>
      <h1 className={styles.h1}>{name}</h1>
      {children}
    </div>
  );
};

MainHeading.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string.isRequired,
};

MainHeading.defaultProps = {
  children: null,
};

export default MainHeading;
