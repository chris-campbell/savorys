import React from "react";
import { useCartState } from "../../../../../../context/cart";
import styled from "styled-components";

const TotalItems = styled.div`
  background-color: ${(p) => p.theme.colors.accent};
  font-size: 0.7rem;
  padding: 0.2rem 0.4rem;
  border-radius: 1rem;
  position: relative;
  right: 0.6rem;
  bottom: 0.5rem;
`;

const CountBubble = () => {
  const { total_items } = useCartState();
  return total_items > 0 ? <TotalItems>{total_items}</TotalItems> : null;
};

export default CountBubble;
