import React from "react";
import styled from "styled-components";

const AddToCartButton = styled.button`
  padding: 0.2rem 0.4rem;
  border-radius: 1rem;
  border: none;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
`;

const Header = ({ addToCart }) => {
  return (
    <header>
      <AddToCartButton onClick={addToCart}>+</AddToCartButton>
    </header>
  );
};

export default Header;
