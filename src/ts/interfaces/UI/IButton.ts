import { ButtonMode, ButtonSize } from '../../enums/UI/Button'

export interface IButtonMode {
  blue: string,
  white: string
}

export interface IButtonSize {
  lg: string,
  sm: string,
  w100: string
}

export interface IButton {
  active?: boolean;
  classes?: string;
  attrs?: string;
  mode: ButtonMode;
  size: ButtonSize
  children?: JSX.Element;
  onClick?: () => void;
}

export interface IButtonSettings {
  mode: IButtonMode,
  size: IButtonSize
}

