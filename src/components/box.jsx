import React from "react";
import PropTypes from "prop-types";
import classnames from "classd";

const Box = (props) => {
  const classes = classnames`box ${props.className}`;

  return <div className={classes}>{props.children}</div>;
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Box.defaultProps = {
  className: null,
};

export default Box;
