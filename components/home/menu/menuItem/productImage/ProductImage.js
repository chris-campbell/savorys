import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

const ProductImage = ({ permalink, image }) => {
  return (
    <ProductImageContainer>
      <Link href={`products/${permalink}`}>
        <Image src={image.url} width={80} height={80} />
      </Link>
    </ProductImageContainer>
  );
};

export default ProductImage;
