import { Graphics } from '@inlet/react-pixi'
import { useCallback, VFC } from 'react'

interface FrameBackgroundProps {
  width: number
  height: number
}
export const FrameBackground: VFC<FrameBackgroundProps> = ({
  width,
  height
}) => {
  const draw = useCallback(
    g => {
      g.clear()
      g.beginFill(0xffffff)
      g.drawRect(0, 0, width, height)
      g.endFill()
    },
    [width, height]
  )
  return <Graphics draw={draw} />
}
