import { FrameBackground } from '#/window/utils/MonoColorBG'
import { Container, Sprite } from '@inlet/react-pixi'
import { BaseTexture, Rectangle, Texture } from 'pixi.js'
import { useEffect, useState, VFC } from 'react'
import traPLogoSrc from './traP_logo.png'

const traPLogoBaseTexture = new BaseTexture(traPLogoSrc)
const spriteNum = 50 as const
const fps = 24 as const

export const SplashScreen: VFC<{
  width: number
  height: number
  onComplete: () => void
}> = ({ width, height, onComplete }) => {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const animation = setInterval(() => {
      setIndex(index => {
        if (index === spriteNum + fps * 2) {
          clearInterval(animation)
          // 即座に実行するとsetIndexが虚無に対して実行されるため
          setTimeout(() => {
            onComplete()
          }, 1)
          return index
        } else {
          return index + 1
        }
      })
    }, 1000 / fps)
  }, [])
  return (
    <>
      <FrameBackground bgColor={0xffffff} width={width} height={height} />
      <Container position={[width / 2, height / 2]}>
        <Sprite
          texture={
            new Texture(
              traPLogoBaseTexture,
              new Rectangle(0, 280 * Math.min(index, spriteNum - 1), 1920, 280)
            )
          }
          alpha={1 - Math.max(0, index - spriteNum - fps) / fps}
          anchor={0.5}
          width={width * 0.9}
          height={((width * 0.9) / 1920) * 280}
        />
      </Container>
    </>
  )
}
