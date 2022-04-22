export const scaling = 1.5
export const iconSize = 64 * scaling
export const tabWidth = 200 * scaling
export const windowEdge = 6 * scaling
export const windowHeaderEdge = (windowEdge / 3) * 2
export const windowHeaderHeight = (windowEdge / 6) * 26
export const footerHeight = windowHeaderHeight * 1.2
export const pointerSize = 20 * scaling

let volume = 0
export const setVolume = (v: number) => {
  volume = v
}
export const getVolume = () => {
  return volume
}
