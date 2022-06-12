import styled from "styled-components";

const CategoriesContainer = styled.section`
  width: 100%;
  position: absolute;
  bottom: -36px;
  margin-top: 2rem;
`;

const CategoriesWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  justify-content: center;
`;

const CategoryItem = styled.div`
  max-width: 15rem;
  display: flex;
  justify-content: center;
  background: ${(p) => p.theme.colors.darkText};
  padding: 1rem;
  color: ${(p) => p.theme.colors.lightText};
  font-family: ${(p) => p.theme.fonts.heading};
  font-size: clamp(0.8rem, 3vw, 1.3rem);
  border-radius: 0.5rem;
`;

const Categories = () => {
  return (
    <CategoriesContainer>
      <CategoriesWrapper>
        <CategoryItem>Cookies</CategoryItem>
        <CategoryItem>Cup Cakes</CategoryItem>
        <CategoryItem>Bread</CategoryItem>
      </CategoriesWrapper>
    </CategoriesContainer>
  );
};

export default Categories;
