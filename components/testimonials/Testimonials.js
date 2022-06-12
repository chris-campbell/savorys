import styled from "styled-components";

const TestimonialContainer = styled.section`
  width: 100%;
  background: #2d2e33;
`;

const TestimonialWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: calc(350px - 150px) 50px;
  h2 {
    font-family: ${(p) => p.theme.fonts.heading};
    color: ${(p) => p.theme.colors.lightText};
    font-size: clamp(1.1rem, 5vw, 1.8rem);
    letter-spacing: 0.1rem;
    margin-bottom: 5rem;
  }
`;

const Quotes = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  span {
    color: ${(p) => p.theme.colors.accent};
    font-size: 7rem;
    margin-right: 2rem;
    position: relative;
    bottom: 3rem;
  }
  blockquote {
    font-size: clamp(1rem, 3vw, 1.4rem);
    color: ${(p) => p.theme.colors.lightText};
    font-family: ${(p) => p.theme.fonts.paragraph};
    line-height: 1.4;
    flex: 1;
  }
`;

const QuoteBlock = styled.div`
  display: flex;
`;

const Quote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    color: ${(p) => p.theme.colors.lightText};
    margin-right: 3rem;
    font-style: italic;
    margin-top: 1.5rem;
  }
`;

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <TestimonialWrapper>
        <h2>What They Say About Us!</h2>
        <Quotes>
          <QuoteBlock>
            <span>&quot;</span>
            <Quote>
              <blockquote>
                Savorys is a New York city bakery that truly lives up to its
                name&apos; giving city goer&quot;s taste buds something to rave
                about. Though new its very easy to see this stylish bakery to
                become the go to place for &quot;Savory&quot; treats.
              </blockquote>
              <p> &#8212; Brooklyn Ancor Eats</p>
            </Quote>
          </QuoteBlock>
          <QuoteBlock>
            <span>&quot;</span>
            <Quote>
              <blockquote>
                Savorys is a New York city bakery that truly lives up to its
                name&apos; giving city goer&apos;s taste buds something to rave
                about. Though new its very easy to see this stylish bakery to
                become the go to place for &quot;Savory&quot; treats.
              </blockquote>
              <p> &#8212; Brooklyn Ancor Eats</p>
            </Quote>
          </QuoteBlock>
          <QuoteBlock>
            <span>&quot;</span>
            <Quote>
              <blockquote>
                I&lsquo;ve had maybe a thousand cheese cakes from a thousand
                different bakeries but none come remotely close to the flavor
                that come out of the Savorys&apos; kitchen. Honestly its time to
                give the baker the key to the city.
              </blockquote>
              <p> &#8212; New York Times</p>
            </Quote>
          </QuoteBlock>
        </Quotes>
      </TestimonialWrapper>
    </TestimonialContainer>
  );
};

export default Testimonial;
