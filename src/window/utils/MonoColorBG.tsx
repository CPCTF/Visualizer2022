import { Graphics } from '@inlet/react-pixi'
import { useCallback, VFC } from 'react'

interface FrameBackgroundProps {
  width: number
  height: number
  bgColor?: number
}
export const FrameBackground: VFC<FrameBackgroundProps> = ({
  width,
  height,
  bgColor = 0xffffff
}) => {
  const draw = useCallback(
    g => {
      g.clear()
      g.beginFill(bgColor)
      g.drawRect(0, 0, width, height)
      g.endFill()
    },
    [width, height]
  )
  return <Graphics draw={draw} />
}
