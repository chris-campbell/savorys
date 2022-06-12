import React from "react";
import { useCartState } from "../../context/cart";
import CartItem from "../cartItem/CartItem";
import styled from "styled-components";

const CartContainer = styled.div``;

const CartWrapper = styled.div`
  display: flex;
  max-width: 1300px;
  padding: 150px 100px;
  margin: 0 auto;
  gap: 10rem;
`;

const Cart = () => {
  const { line_items, subtotal, total, total_items } = useCartState();
  const isEmpty = line_items.length === 0;

  if (isEmpty) return <p>Your cart is empty.</p>;

  return (
    <CartContainer>
      <h1>Shopping Cart</h1>
      <CartWrapper>
        <div className="shopping-cart-items">
          {line_items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="checkout-summary">
          <h2>Summary</h2>

          <p>
            <strong>Sub total:</strong>
            <span>{subtotal.formatted_with_symbol}</span>
          </p>
          <p>
            <strong>Shipping:</strong>
            <span>Free</span>
          </p>
          <p>
            <strong>Total:</strong>
            <span>{subtotal.formatted_with_symbol}</span>
          </p>
          <button>Proceed to checkout</button>
        </div>
      </CartWrapper>
    </CartContainer>
  );
};

export default Cart;

{
  /* <div>
  <h2>Summary</h2>

  <p>
    <strong>Sub total:</strong>
    <span>{subtotal.formatted_with_symbol}</span>
  </p>
  <p>
    <strong>Shipping:</strong>
    <span>Free</span>
  </p>
  <p>
    <strong>Total:</strong>
    <span>{subtotal.formatted_with_symbol}</span>
  </p>
  <button>Proceed to checkout</button>
</div>; */
}

// const CartContainer = styled.div``;

// const CartWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   max-width: 1500px;
//   margin: 0 auto;
// `;

// const CheckoutSummary = styled.div`
//   padding: 2rem;
//   background-color: ${(p) => p.theme.colors.accent};
//   height: fit-content;

//   h2 {
//     padding: 1rem 0;
//   }

//   p {
//     padding: 0.5rem;
//   }
// `;

// const SummaryPoint = styled.p`
//   display: flex;
//   justify-content: space-between;
//   gap: 3rem;
// `;

// const ProceedToCheckout = styled.button`
//   background-color: ${(p) => p.theme.colors.darkText};
//   color: #fff;
//   margin-top: 2rem;
//   padding: 1rem 1rem;
//   border: none;
//   width: 100%;
//   position: sticky;
//   top: 0;
// `;

// const CartItems = styled.div`
//   max-width: 60rem;
// `;
