import styled from "styled-components";
import Logo from "../Logo";
import HeaderOptions from "./HeaderOptions";
import HeaderContacts from "./HeaderContacts";
import HeaderCart from "./HeaderCart";

const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <Logo />
      <HeaderOptions />
      <HeaderContacts />
      <HeaderCart />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;
