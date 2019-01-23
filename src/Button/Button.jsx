import React from "react";
import classnames from 'classnames';
import './button.css';

export function Button(props) {
  const { children, className, ...otherProps } = props;
  return (
    <button className={classnames("ms-button", className)} {...otherProps}>
      {children}
    </button>
  );
}
