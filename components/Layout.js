import PropTypes from "prop-types";
import { main } from "./layout.styl";

const Layout = ({ children }) => {
  return <main className={main}>{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
