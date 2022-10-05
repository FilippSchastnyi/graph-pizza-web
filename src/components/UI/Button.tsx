import styled from 'styled-components'
import { settings } from './Button.settings'
import { IButton } from '../../ts/interfaces/UI/IButton'
import { ButtonMode, ButtonSize } from '../../ts/enums/UI/Button'

const Button = ( props : IButton): JSX.Element => {
  const btnClasses = [props.classes].join(' ')
  return (
    <Wrapper className={btnClasses}
             size={props.size}
             mode={props.mode}
    >
      {props.children}
    </Wrapper>
  )
}

const getTheme = (mode: ButtonMode): string => {
  return settings.mode[mode]
}

const getSize = (size: ButtonSize): string => {
  return settings.size[size]
}

const Wrapper = styled.button<IButton>`
  background: #F5F5FA;
  padding: 10px 5px;
  ${props => getTheme(props.mode)}
  ${props => getSize(props.size)}
  border-radius: 32px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
  5px 5px 10px rgba(170, 170, 204, 0.25),
  10px 10px 20px rgba(170, 170, 204, 0.5),
    -10px -10px 20px #FFFFFF;
`

export default Button
