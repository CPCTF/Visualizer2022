import { ThreeResourceLoader } from '#/system/Loader'
import { Container, Text } from '@inlet/react-pixi'
import { TextStyle } from 'pixi.js'
import { useEffect, useState, VFC } from 'react'
import xpSrc from '../../background/xp.jpg'
import closeSrc from '../../close.png'
import fullscreenSrc from '../../fullscreen.png'
import minimizeSrc from '../../minimize.png'
import bgSrc from '../../bg.png'
import barSrc from '../../bar.png'

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
        setPercent(Math.floor((count / total) * 100))
      })
      loadedHandler()
    }
    asyncFunc()
  }, [])

  if (percent === 100) return null
  return (
    <Container position={[width / 2, height / 2]}>
      <Text
        text={`${percent}%`}
        anchor={0.5}
        position={[0, -50]}
        style={
          new TextStyle({
            align: 'center',
            fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: 20,
            fill: '#000'
          })
        }
      />
      <Text
        text={pathText}
        anchor={0.5}
        position={[0, 50]}
        style={
          new TextStyle({
            align: 'center',
            fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: 20,
            fill: '#000'
          })
        }
      />
    </Container>
  )
}
