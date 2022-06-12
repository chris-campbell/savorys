import React from "react";
import styled from "styled-components";
import TextTruncate from "react-text-truncate";
import Link from "next/link";

const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 2rem;

  h3 {
    text-align: center;
    margin-bottom: 1rem !important;
    font-size: clamp(1rem, 10vw, 1.1rem);
  }

  p span span {
    text-align: center;
    margin-bottom: 1rem;
    line-height: 1.4;
    font-size: 0.8rem;
    min-height: 3rem;
  }

  p span a {
    font-size: 0.8rem;
  }
`;

const ProductDetails = ({ name, description, permalink }) => {
  var plainString = description.replace(/<[^>]+>/g, "");

  return (
    <ProductDetailsContainer>
      <h3>{name}</h3>

      <TextTruncate
        line={3}
        element="p"
        truncateText="…"
        text={plainString}
        textTruncateChild={<Link href={`products/${permalink}`}>See more</Link>}
      />
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
