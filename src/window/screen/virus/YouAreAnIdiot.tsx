import {
  FrameTemplate,
  getFrameHeight,
  getFrameWidth
} from '#/window/utils/FrameTemplate'
import { Container, Sprite, useTick } from '@inlet/react-pixi'
import type { Container as PixiContainer } from 'pixi.js'
import { useEffect, useRef, useState, VFC } from 'react'
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
  const containerRef = useRef<PixiContainer | null>(null)
  const positionRef = useRef([0, 0])
  const directionRef = useRef([0, 0])

  useEffect(() => {
    const dir = Math.PI * Math.random()
    directionRef.current = [Math.cos(dir) * 3.0, Math.sin(dir) * 3.0]
  }, [])

  useTick(delta => {
    if (!containerRef.current || !positionRef.current || !directionRef.current)
      return
    directionRef.current[1] += (9.8 * delta) / 30.0
    const pos = [
      positionRef.current[0] + (directionRef.current[0] * delta) / 30,
      positionRef.current[1] + (directionRef.current[1] * delta) / 30
    ]
    if (pos[0] < 0) {
      pos[0] = 0
      directionRef.current[0] *= -1
    } else if (pos[0] > width - windowWidth) {
      pos[0] = width - windowWidth
      directionRef.current[0] *= -1
    } else if (pos[1] > Math.max(1, height - windowHeight)) {
      pos[1] = Math.max(1, height - windowHeight)
      directionRef.current[1] *= -1
    }
    positionRef.current = pos
    containerRef.current.position.set(pos[0], pos[1])
  })
  return (
    <Container
      ref={containerRef}
      position={[
        (index * 1204) % (width - windowWidth),
        (index * 23459) % Math.max(1, height - windowHeight)
      ]}
    >
      <FrameTemplate
        width={windowWidth}
        height={windowHeight}
        title={'Hahahahahaha'}
      >
        <Sprite
          image={trans ? blackSrc : whiteSrc}
          width={getFrameWidth(windowWidth)}
          height={getFrameHeight(windowHeight)}
        />
      </FrameTemplate>
    </Container>
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
