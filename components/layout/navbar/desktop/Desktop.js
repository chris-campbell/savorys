import Image from "next/image";
import Logo from "../img/savorys_logo.svg";
import styled from "styled-components";
import Link from "next/link";
import { useCartState } from "../../../../context/cart";
import CartIcon from "./cartIcon/CartIcon";

const DesktopHeader = styled.header`
  width: 100%;
  background-color: ${(p) => p.theme.colors.lightText};
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
`;

const DesktopHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem 0;
  align-items: center;
  padding-right: 1.5rem;
  nav ul {
    display: flex;
    list-style: none;
    gap: 3rem;
    li {
      gap: 0.3rem;
      font-family: ${(p) => p.theme.fonts.paragraph};
      font-size: 1.1rem;
      a {
        display: flex;
        align-items: center;
      }
      &:hover {
        color: ${(p) => p.theme.colors.accent};
        transition: 400ms;
      }
    }
  }
`;

const Desktop = () => {
  return (
    <DesktopHeader>
      <DesktopHeaderWrapper>
        <Link href="/">
          <a>
            <Image src={Logo} width={150} height={50} alt="Savorys logo" />
          </a>
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/#menu">
                <a>Menu</a>
              </Link>
            </li>
            <li>Contact</li>
            <li>
              <CartIcon />
            </li>
          </ul>
        </nav>
      </DesktopHeaderWrapper>
    </DesktopHeader>
  );
};

export default Desktop;
