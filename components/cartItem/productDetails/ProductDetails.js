import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ProductDetailsContainer = styled.div``;

const ProductDetailsWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, minmax(2rem, 15rem));
  justify-content: center;
  align-items: center;


`;

const ProductDetails = ({ name, image, quantity, lineTotal }) => {
  return (
    <ProductDetailsContainer>
      <ProductDetailsWrapper>
        <div>
          <Image src={image.url} width={50} height={50} />
        </div>
        <p>{name}</p>
        <p>{quantity}</p>
        <p>{lineTotal.formatted_with_symbol}</p>
      </ProductDetailsWrapper>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
