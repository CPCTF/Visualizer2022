import { ThreeResourceLoader } from '#/system/Loader'
import { Container, Sprite, Text } from '@inlet/react-pixi'
import { BaseTexture, Rectangle, TextStyle, Texture } from 'pixi.js'
import { useEffect, useMemo, useState, VFC } from 'react'
import xpSrc from '../../background/xp.jpg'
import closeSrc from '../../close.png'
import fullscreenSrc from '../../fullscreen.png'
import minimizeSrc from '../../minimize.png'
import bgSrc from '../../bg.png'
import barSrc from '../../bar.png'
import folderSrc from './folder.png'
import loadingFrameSrc from './loading_frame.png'
import loadingFillSrc from './loading_fill.png'

interface LoadingCanvasProps {
  width: number
  height: number
  loadedHandler: () => void
}

export const LoadingCanvas: VFC<LoadingCanvasProps> = ({
  width,
  height,
  loadedHandler
}) => {
  const [pathText, setPathText] = useState('')
  const [percent, setPercent] = useState(0)
  const [textures, setTextures] = useState<{
    textures: Texture[]
    index: number
  }>({ textures: [], index: -1 })

  useEffect(() => {
    const asyncFunc = async () => {
      ThreeResourceLoader.addTexture(closeSrc)
      ThreeResourceLoader.addTexture(xpSrc)
      ThreeResourceLoader.addTexture(fullscreenSrc)
      ThreeResourceLoader.addTexture(minimizeSrc)
      ThreeResourceLoader.addTexture(barSrc)
      ThreeResourceLoader.addTexture(bgSrc)
      await ThreeResourceLoader.load(({ path, total, count }) => {
        setPathText(path)
        setPercent(count / total)
      })
      loadedHandler()
    }
    asyncFunc()

    const baseTexture = new BaseTexture(folderSrc)
    setTextures({
      index: 0,
      textures: [
        new Texture(baseTexture, new Rectangle(64 * 0, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 1, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 2, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 3, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 4, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 5, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 6, 0, 64, 64)),
        new Texture(baseTexture, new Rectangle(64 * 7, 0, 64, 64))
      ]
    })

    const textureAnimation = setInterval(() => {
      setTextures(nowTextures => {
        return {
          index: (nowTextures.index + 1) % nowTextures.textures.length,
          textures: nowTextures.textures
        }
      })
    }, 200)

    return () => {
      clearInterval(textureAnimation)
    }
  }, [])

  // if (percent === 100) return null
  return (
    <Container position={[width / 2, height / 2]}>
      {textures.index < 0 ? null : (
        <Sprite
          texture={textures.textures[textures.index]}
          anchor={0.5}
          position={[0, -50]}
        />
      )}
      <Text
        text={pathText}
        anchor={0.5}
        position={[0, 0]}
        style={
          new TextStyle({
            align: 'center',
            fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: 20,
            fill: '#000'
          })
        }
      />
      <Sprite
        image={loadingFrameSrc}
        position={[0, 50]}
        anchor={0.5}
        width={260}
        height={32}
      >
        {new Array(Math.floor(16 * percent)).fill(null).map((_, index) => {
          return (
            <Sprite
              image={loadingFillSrc}
              anchor={[0, 0.5]}
              position={[(index - 8) * 16, 0]}
              width={16}
              height={32}
            />
          )
        })}
      </Sprite>
    </Container>
  )
}
