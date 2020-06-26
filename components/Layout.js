import PropTypes from "prop-types";
import { styles } from "./layout.styl";

const Layout = ({ children }) => {
  return <main className={styles}>{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
