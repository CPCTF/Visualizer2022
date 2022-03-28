const scaling = 1.5
export const footerHeight = 54 * scaling
export const windowHeaderHeight = 32 * scaling
export const iconSize = 64 * scaling
export const tabWidth = 200 * scaling

let volume = 0
export const setVolume = (v: number) => {
  volume = v
}
export const getVolume = () => {
  return volume
}
