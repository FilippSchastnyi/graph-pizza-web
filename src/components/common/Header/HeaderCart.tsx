import styled from 'styled-components'
import { IHeader } from './Header'

interface ICartOptions extends Omit<IHeader, 'setModalState'> {}

const HeaderCart = ({ setFlyoutState }: ICartOptions): JSX.Element => {
  return (
    <Wrapper
      onClick={()=>{setFlyoutState(true)}}
    >
      <span> 0$ </span>
      <a href='#'> Корзина </a>
      <a href='#'> Адрес </a>
    </Wrapper>
  )
}

export default HeaderCart

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
