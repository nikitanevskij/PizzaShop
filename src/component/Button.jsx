import React from "react";
import classNames from "classnames";

function Button({ onClick, children, className, outline }) {
  return (
    <div
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </div>
  );
}

export default Button;
