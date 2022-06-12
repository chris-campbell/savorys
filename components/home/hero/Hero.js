import styled from "styled-components";
import Owner from "../img/owner.svg";
import Image from "next/image";
import Categories from "../../categories/Categories";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroContainer = styled.section`
  width: 100%;
  min-height: 62vh;
  /* margin-top: 8%; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  padding: calc(350px - 150px) 50px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 575px) {
    padding: calc(250px - 150px) 30px;
  }
`;

const HeroMessage = styled.div`
  max-width: 45%;
  @media (max-width: 900px) {
    max-width: 100%;
  }

  h1 {
    font-family: ${(p) => p.theme.fonts.heading};
    font-size: clamp(3.5rem, 5vw, 7.5rem);
    margin-bottom: 0.5rem;
  }
  h2 {
    font-family: ${(p) => p.theme.fonts.heading};
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    margin-bottom: 2rem;
  }
  p {
    font-family: ${(p) => p.theme.fonts.paragraph};
    font-size: clamp(1rem, 4vw, 1.2rem);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const HeroImageContainer = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

const SeeMoreButton = styled.div`
  display: flex;
  align-items: center;
  /* background: ${(p) => p.theme.colors.accent}; */
  width: fit-content;
  
  color: ${(p) => p.theme.colors.lightText};
`;

const ButtonLeft = styled.div`
  background-color: ${(p) => p.theme.colors.accent};
  padding: 0.88rem;
`;

const ButtonRight = styled.div`
  background-color: #ffbd558c;
  padding: 0.6rem;
  color: ${(p) => p.theme.colors.darkText};
  display: flex;
  align-items: center;
  padding: 0.71rem;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroMessage>
          <h1>Free Delivery</h1>
          <h2>In All 5 NYC Boroughs</h2>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system.
          </p>
          <SeeMoreButton>
            <ButtonLeft>See More</ButtonLeft>
            <ButtonRight>
              <ArrowForwardIcon />
            </ButtonRight>
          </SeeMoreButton>
        </HeroMessage>
        <HeroImageContainer>
          <Image
            src={Owner}
            width={700}
            height={700}
            alt="Savorys owner graphic"
          />
        </HeroImageContainer>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
