import styled from "styled-components";
import Logo from "../Logo"
import HeaderOptions from "./HeaderOptions";
import HeaderContacts from "./HeaderContacts";
import HeaderCart from "./HeaderCart";
import Flex from "../../styled/Flex";

const Header = () => {
  return (
    <Flex
      justify = 'space-between'
      align = 'center'
    >
      <Logo/>
      <HeaderOptions/>
      <HeaderContacts/>
      <HeaderCart/>
    </Flex>
  )
}

export default Header

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
