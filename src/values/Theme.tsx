import { Dimensions } from 'react-native'

const window = Dimensions.get('window')

const stickerSize = Math.floor(window.width / 6.5)

const Theme = {
  w: window.width,
  h: window.height,
  stickerSize: stickerSize,
  // For components that don't scale, like Icon, Checkbox etc
  sizeXXS: 2,
  sizeXS: 4,
  sizeS: 8,
  sizeM: 16,
  sizeL: 24,
  sizeXL: 32,
  sizeXXL: 64,
}

export default Theme
