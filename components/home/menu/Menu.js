import styled from "styled-components";
import MenuItem from "./menuItem/MenuItem";
import getCommerce from "../../../lib/commerce";

const MenuContainer = styled.section`
  height: auto;
`;

const MenuWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: calc(350px - 150px) 50px;
  h2 {
    font-family: ${(p) => p.theme.fonts.heading};
    color: ${(p) => p.theme.colors.darkText};
    font-size: clamp(1.1rem, 5vw, 1.8rem);
    letter-spacing: 0.1rem;
    margin-bottom: 3rem;
  }
`;

const MenuItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  row-gap: 3rem;

  @media (max-width: 1027px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 521px) {
    grid-template-columns: repeat(1, 1fr);
  }

  h3 {
    font-family: ${(p) => p.theme.fonts.heading};
    margin-bottom: 1.9rem;
    font-size: clamp(0.9rem, 3vw, 1.1rem);
  }

  h4 {
    font-family: ${(p) => p.theme.fonts.paragraph};
    font-size: 0.8rem;
    color: grey;
    margin-bottom: 1rem;
  }
`;

const Menu = ({ products }) => {
  const commerce = getCommerce();

  const displayProducts = () => {
    return products.map((product) => (
      <MenuItem commerce={commerce} key={product.id} {...product} />
    ));
  };

  return (
    <MenuContainer id="menu">
      <MenuWrapper>
        <h2>We don’t sell everything, Just the best things!</h2>
        <MenuItems>{displayProducts()}</MenuItems>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default Menu;
