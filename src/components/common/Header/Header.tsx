import styled from "styled-components";
import Logo from "../Logo";
import HeaderOptions from "./HeaderOptions";
import HeaderContacts from "./HeaderContacts";
import HeaderCart from "./HeaderCart";
import { IHeaderOptions } from '../../../Interfaces/Options'

const Header = ({setModalState}: IHeaderOptions): JSX.Element => {
  return (
    <Wrapper>
      <Logo />
      <HeaderOptions
        setModalState = {setModalState}
      />
      <HeaderContacts />
      <HeaderCart />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  min-height: 50px;
`;
