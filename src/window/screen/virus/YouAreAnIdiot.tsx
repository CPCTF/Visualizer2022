import { Sprite, useTick } from '@inlet/react-pixi'
import { useState, VFC } from 'react'
import blackSrc from './youareanidit_black.png'
import whiteSrc from './youareanidit_white.png'

export const YouAreAnIdiotWindow: VFC<{
  width: number
  height: number
  index: number
  trans: boolean
}> = ({ index, width, height, trans }) => {
  return (
    <>
      <Sprite
        image={trans ? blackSrc : whiteSrc}
        position={[index * 10, index * 10]}
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
