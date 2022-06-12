import { useState, useEffect } from "react";

import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";
import getCommerce from "../../../lib/commerce";

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);

  const commerce = getCommerce();
  console.log({ commerce });

  commerce.cart.contents().then((res) => console.log({ res }));

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return width < 580 ? <Mobile /> : <Desktop />;
}

export default Navbar;
