import React from "react";
import PropTypes from "prop-types";
import classnames from "classd";

const Message = ({ type, title }) => {
  const classes = classnames`
    message
    message--${type}
  `;

  return <div className={classes}>{title}</div>;
};

Message.propTypes = {
  type: PropTypes.oneOf(["error", "info"]),
  title: PropTypes.string.isRequired,
};

Message.defaultProps = {
  type: "info",
};

export default Message;
