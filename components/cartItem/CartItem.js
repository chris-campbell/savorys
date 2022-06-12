import React from "react";
import styled from "styled-components";
import { useCartDispatch } from "../../context/cart";
import getCommerce from "../../lib/commerce";
import ProductDetails from "./productDetails/ProductDetails";
import ModifyCartItem from "./modifyCartItem/ModifyCartItem";

const CartItemContainer = styled.section`
  height: auto;
`;

const CartItemWrapper = styled.div`
  display: flex;
  max-width: 1500px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  align-items: center;
  border-bottom: 1px solid lightgray;
  width: 100%;
  h2 {
    font-family: ${(p) => p.theme.fonts.heading};
    color: ${(p) => p.theme.colors.darkText};
    font-size: clamp(1.1rem, 5vw, 1.8rem);
    letter-spacing: 0.1rem;
    margin-bottom: 5rem;
  }
`;

const CartItem = ({ id, name, quantity, line_total, image }) => {
  const commerce = getCommerce();

  const { setCart } = useCartDispatch();

  const handleUpdateCart = ({ cart }) => setCart(cart);

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : removeItem();
  };

  const incrementQuantity = () =>
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);

  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);

  return (
    <CartItemContainer>
      <CartItemWrapper>
        <ProductDetails
          name={name}
          image={image}
          quantity={quantity}
          lineTotal={line_total}
        />

        <ModifyCartItem
          decrement={decrementQuantity}
          increment={incrementQuantity}
          removeItem={removeItem}
        />
      </CartItemWrapper>
    </CartItemContainer>
  );
};

export default CartItem;
