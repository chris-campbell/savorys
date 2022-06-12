import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../components/ThemeConfig";
import { CartProvider } from "../context/cart";

const GlobalStyles = createGlobalStyle`
  html,
  body {
      padding: 0;
      margin: 0;
      background-color: ${(p) => p.theme.colors.blue_300};
      scroll-behavior: smooth;
  }

  main {
    min-height: 60vh;
   
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;

export async function getStaticProps() {
  return {
    pageProps: {
      commercePublicKey: process.env.COMMERCE_PUBLIC_KEY,
    },
  };
}
