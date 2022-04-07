import React from "react";
import { StyledSelect } from "./styled";

const Select = ({ children, ...props }) => {
  return <StyledSelect {...props}>{children}</StyledSelect>;
};

export default Select;
