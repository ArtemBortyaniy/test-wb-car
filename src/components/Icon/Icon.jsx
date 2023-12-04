import React from "react";
import spriteDefs from "../../svg/symbol-defs.svg";

const Icon = ({ name, className }) => (
  <svg className={className}>
    <use xlinkHref={`${spriteDefs}#${name}`} />
  </svg>
);

export default Icon;
