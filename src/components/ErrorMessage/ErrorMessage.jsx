import css from "./ErrorMessage.module.css";
import PropTypes from "prop-types";

export default function ErrorMessage({ message }) {
  return <a className={css.error_message}>Error: {message}</a>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};