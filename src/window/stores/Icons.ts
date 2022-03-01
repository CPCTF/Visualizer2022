import iconSrc from './icons/clock-icon.png'

export interface IconInfo {
  src: string
  id: string
  title: string
}

export const icons: IconInfo[] = [
  {
    src: iconSrc,
    id: 'clock',
    title: 'Clock.exe'
  }
]
