import styled from "styled-components";
import Logo from "../Logo";
import HeaderOptions from './HeaderOptions'
import HeaderCart from './HeaderCart'
import HeaderContacts from "./HeaderContacts";

export interface IHeader {
  setModalState: (modalState: boolean) => void;
  setFlyoutState: (flyoutState: boolean) => void;
}

const Header = ({setModalState, setFlyoutState}: IHeader): JSX.Element => {
  return (
    <Wrapper>
      <Logo />
      <HeaderOptions
        setModalState = {setModalState}
      />
      <HeaderContacts />
      <HeaderCart
        setFlyoutState = {setFlyoutState}
      />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #dad9d9;
  position: sticky;
  left: 0;
  right: 0;
  min-height: 50px;
`;
