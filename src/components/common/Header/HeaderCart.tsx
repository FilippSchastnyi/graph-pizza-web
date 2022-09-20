import styled from "styled-components";

const HeaderCart = (): JSX.Element => {
  return (
    <Wrapper>
      <span> 0$ </span>
      <a href="#"> Корзина </a>
      <a href="#"> Адрес </a>
    </Wrapper>
  );
};

export default HeaderCart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
