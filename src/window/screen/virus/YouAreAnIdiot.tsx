import { Sprite, useTick } from '@inlet/react-pixi'
import { useState, VFC } from 'react'
import blackSrc from './youareanidiot_black.png'
import whiteSrc from './youareanidiot_white.png'

export const YouAreAnIdiotWindow: VFC<{
  width: number
  height: number
  index: number
  trans: boolean
}> = ({ index, width, height, trans }) => {
  const windowWidth = width * 0.7
  const windowHeight = (windowWidth / 1576) * 994
  return (
    <>
      <Sprite
        image={trans ? blackSrc : whiteSrc}
        position={[
          (index * 1000) % (width - windowWidth),
          (index * 1000) % Math.max(1, height - windowHeight)
        ]}
        width={windowWidth}
        height={windowHeight}
      />
    </>
  )
}

export const YouAreAnIdiot: VFC<{ width: number; height: number }> = ({
  width,
  height
}) => {
  const [trans, setTrans] = useState(false)
  useTick(() => {
    const time = performance.now()

    setTrans(Math.floor(time / 500) % 2 == 0)
  })

  return (
    <>
      {new Array(10).fill(null).map((_, index) => (
        <YouAreAnIdiotWindow
          key={index}
          width={width}
          height={height}
          index={index}
          trans={trans}
        />
      ))}
    </>
  )
}
