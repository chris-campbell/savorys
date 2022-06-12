import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header/Header";
import ProductImage from "./productImage/ProductImage";
import ProductDetails from "./productDetails/ProductDetails";
import Quantity from "./quantity/Quantity";
import { useCartDispatch } from "../../../../context/cart";
import getCommerce from "../../../../lib/commerce";
import Snackbar from "@mui/material/Snackbar";

const MenuItemContainer = styled.article`
  background-color: transparent;
  border: 1px solid #eee;
  border-radius: 0.3rem;
  border: 1px solid ${(p) => p.theme.colors.darkText};
`;

const MenuItemWrapper = styled.div`
  padding: 1rem;

  header {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 1.5rem;
  }
`;

export default function MenuItem({
  id,
  name,
  permalink,
  price,
  description,
  image,
}) {
  const [quantity, setQuantity] = useState(0);
  const { setCart } = useCartDispatch();

  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // const action = (
  //   <>
  //     <Button color="secondary" size="small" onClick={handleClose}>
  //       UNDO
  //     </Button>
  //     <IconButton
  //       size="small"
  //       aria-label="close"
  //       color="inherit"
  //       onClick={handleClose}
  //     >
  //       <CloseIcon fontSize="small" />
  //     </IconButton>
  //   </>
  // );

  const addToCart = () => {
    const commerce = getCommerce();
    commerce.cart.add(id, quantity).then(({ cart }) => {
      setCart(cart);
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Items added to cart!"
      />;
    });
  };

  const handleQuantity = (amount) => {
    setQuantity(amount);
  };

  return (
    <MenuItemContainer key={id}>
      <MenuItemWrapper>
        <Header addToCart={addToCart} />
        <ProductImage permalink={permalink} image={image} />
        <ProductDetails
          name={name}
          description={description}
          permalink={permalink}
        />
        <Quantity handleQuantity={handleQuantity} price={price} />
      </MenuItemWrapper>
    </MenuItemContainer>
  );
}
