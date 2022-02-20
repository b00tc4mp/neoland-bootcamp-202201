import React from "react";
import { Title, Container } from "./styled";

const Stat = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <span>{children}</span>
    </Container>
  );
};

export default Stat;
