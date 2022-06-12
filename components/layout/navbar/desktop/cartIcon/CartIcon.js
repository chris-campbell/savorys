import React from "react";
import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCartState } from "../../../../../context/cart";
import CountBubble from "./countBubble/CountBubble";

const CartIcon = () => {
  return (
    <Link href="/cart">
      <a>
        <ShoppingCartOutlinedIcon />
        <CountBubble />
      </a>
    </Link>
  );
};

export default CartIcon;
