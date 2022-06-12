import React, { useEffect, useState } from "react";
import styled from "styled-components";

const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-family: ${(p) => p.theme.fonts.heading};
    font-size: 0.9rem;
  }

  select {
    background-color: transparent;
    border: 1px solid lightgrey;
    padding: 0.2rem;
    border-radius: 0.2rem;
    option {
      font-size: 0.2rem;
    }
  }
`;

const Quantity = ({ price, handleQuantity }) => {
  const [selectOption, setSelectOption] = useState(1);

  useEffect(() => {
    handleQuantity(selectOption);
  }, [selectOption]);

  return (
    <QuantityContainer>
      <p>{price.formatted_with_symbol}</p>
      <select onChange={(e) => setSelectOption(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </QuantityContainer>
  );
};

export default Quantity;
