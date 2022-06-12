import styled from "styled-components";
import { Pinterest } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";

const FooterContainer = styled.footer`
  width: 100%;
  background: ${(p) => p.theme.colors.accent};
`;

const FooterWrapper = styled.div`
  padding: 2rem;
  display: flex;
  padding: 8rem 4rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1600px;
  gap: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ReachOutAction = styled.div`
  h4 {
    font-size: clamp(1.7rem, 5vw, 2.5rem);
    margin-bottom: 2rem;
    font-family: ${(p) => p.theme.fonts.heading};
    max-width: 28rem;
    line-height: 3rem;
  }
`;

const ReachOutMessage = styled.div`
  max-width: 27rem;
  p {
    font-family: ${(p) => p.theme.fonts.paragraph};
    line-height: 1.7;
    font-size: clamp(1rem, 3vw, 1.1rem);
    margin-bottom: 1rem;
  }
`;

const ReachOutButton = styled.button`
  color: ${(p) => p.theme.colors.darkText};
  padding: 1rem 1.5rem;
  border: 2px solid ${(p) => p.theme.colors.darkText};
  background: transparent;
  border-radius: 12rem;
  font-weight: 900;
`;

const SocialIcons = styled.div`
  max-width: 7rem;
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  svg {
    font-size: 2.5rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <ReachOutMessage>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system.
          </p>
          <SocialIcons>
            <Facebook />
            <Instagram />
            <Pinterest />
          </SocialIcons>
        </ReachOutMessage>
        <ReachOutAction>
          <h4>We Also Cater Events & Parties</h4>
          <ReachOutButton>Reach Out</ReachOutButton>
        </ReachOutAction>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
