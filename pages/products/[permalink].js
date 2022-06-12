import getCommerce from "../../lib/commerce";
import styled from "styled-components";
import { useCartDispatch } from "../../context/cart";
import Image from "next/image";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";

const ProductContainer = styled.section`
  min-height: 0vh;
`;

const ProductWrapper = styled.div`
  max-width: 1400px;
  padding: clamp(150px, 50vw, 350px) 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const ProductDetails = styled.div`
  max-width: 35rem;

  h1 {
    font-size: 5rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-family: ${(p) => p.theme.fonts.heading};
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const AddToCart = styled.div`
  padding: 1rem 2rem;
  background-color: ${(p) => p.theme.colors.darkText};
  width: fit-content;
  color: #fff;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  margin-top: 2rem;
  cursor: pointer;
`;

const ProductImage = styled.div`
  display: flex;
  position: relative;

  span {
    position: relative;
    top: 3rem;
    right: 9rem;
  }
`;

const BackToMenu = styled(Link)`
  display: block !important;
  cursor: pointer;
  margin-bottom: 2rem !important;
  a {
    display: flex;
    align-items: center;
  }
`;

const StyleCell = styled.div`
  min-height: 550px;
  width: 350px;
  background-color: #509ec1;
  position: absolute;
  z-index: -1;
  border-top-left-radius: 10rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 10rem;
  opacity: 0.4;
  bottom: -5rem;
`;

const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: ${(p) => p.theme.fonts.heading};
    font-size: 1.5rem;
    margin-bottom: 0;
    letter-spacing: 0.1rem;
  }

  select {
    height: fit-content;
    padding: 0.5rem;
    border: 1px solid lightgray;
    border-radius: 0.2rem;
    cursor: pointer;
  }
`;

export async function getStaticProps({ params }) {
  const commerce = getCommerce();

  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const commerce = getCommerce();

  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductsPage({ product }) {
  const { setCart } = useCartDispatch();

  const addToCart = () => {
    const commerce = getCommerce();
    commerce.cart.add(product.id).then(({ cart }) => setCart(cart));
  };

  var plainString = product.description.replace(/<[^>]+>/g, "");

  return (
    <ProductContainer>
      <ProductWrapper>
        <ProductDetails>
          <BackToMenu href="/#menu">
            <ArrowBack />
          </BackToMenu>
          <h1>{product.name}</h1>
          <p>{plainString}</p>
          <Quantity>
            <p>{product.price.formatted_with_symbol}</p>
            <select onChange={(e) => setSelectOption(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </Quantity>
          <AddToCart onClick={addToCart}>Add to cart</AddToCart>
        </ProductDetails>
        <ProductImage>
          <Image src={product.image.url} width={375} height={375} />
          <StyleCell></StyleCell>
        </ProductImage>
      </ProductWrapper>
    </ProductContainer>
  );
}
