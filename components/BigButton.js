import PropTypes from "prop-types";
import { bigButton } from "./BigButton.styl";

const BigButton = ({ children }) => {
  return <div className={bigButton}>{children}</div>;
};

BigButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default BigButton;
