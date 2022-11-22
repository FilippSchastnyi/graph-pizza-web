import { color } from '../../config/Colors'
import { IButtonSettings } from '../../ts/interfaces/UI_interfaces'

export const settings : IButtonSettings = {
  mode: {
    blue: `
    background: ${color.$colorBlue};
    `,
    white: `
    background: ${color.$colorWhite};
    `
  },
  size: {
    sm: `
    height: 40px;
    width: 100px;
    `,
    lg: `
    height: 60px;
    width: 210px;
    `,
    w100: `
    width: 100%;
    `
  }
}
