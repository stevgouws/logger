import PropTypes from "prop-types";
import { field } from "./field.styl";
const Field = ({ title }) => {
  return <div className={field}>{title}</div>;
};

Field.propTypes = {
  title: PropTypes.string,
};

export default Field;
