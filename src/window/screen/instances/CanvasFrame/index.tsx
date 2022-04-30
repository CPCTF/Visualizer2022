import type { WindowComponentProps } from '#/window/stores/WindowSystem'
import { useEffect, useRef, useState, VFC } from 'react'
import { Texture, BaseTexture, TextStyle, Text as PixiText } from 'pixi.js'
import { Sprite, useTick, Text } from '@inlet/react-pixi'
import { LoadingCanvas } from './Loading'
import { SplashScreen } from './SplashScreen'
import { Visualizer } from '#/Visualizer'

type VisualizerMode = 'loading' | 'splashscreen' | 'visualizer'

const twoPadding = (time: number) => {
  return ('00' + time).slice(-2)
}

export const CanvasFrame: VFC<WindowComponentProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [spriteSize, setSpriteSize] = useState({ width, height })
  const [texture, setTexture] = useState<Texture>(
    new Texture(new BaseTexture())
  )
  const [mode, setMode] = useState<VisualizerMode>('loading')
  const timeRef = useRef<PixiText>(null)

  useTick(() => {
    texture.update()
    const tick = Visualizer.getInstance().tick
    if (tick) tick()

    if (timeRef.current) {
      const now = new Date()
      timeRef.current.text = `${now.getFullYear()}-${twoPadding(
        now.getMonth()
      )}-${twoPadding(now.getDate())} ${twoPadding(
        now.getHours()
      )}:${twoPadding(now.getMinutes())}:${twoPadding(now.getSeconds())}`
    }
  })

  useEffect(() => {
    Visualizer.getInstance().resize(width, height)
    texture.update()
    setSpriteSize({ width, height })
  }, [width, height])

  const callVisualizer = () => {
    const canvas = document.createElement('canvas') as HTMLCanvasElement
    document.body.appendChild(canvas)
    canvasRef.current = canvas

    Visualizer.getInstance().setup(canvas)
    Visualizer.getInstance().resize(width, height)
    setTexture(new Texture(BaseTexture.from(canvas)))
    setMode('splashscreen')
  }
  const runVisualizer = () => {
    Visualizer.getInstance().start()
    setMode('visualizer')
  }

  const SwitchMode = (mode: VisualizerMode) => {
    if (mode === 'loading')
      return (
        <LoadingCanvas
          width={width}
          height={height}
          loadedHandler={callVisualizer}
        />
      )
    if (mode === 'splashscreen')
      return (
        <SplashScreen
          width={width}
          height={height}
          onComplete={runVisualizer}
        />
      )
    return (
      <>
        <Sprite
          texture={texture}
          width={spriteSize.width}
          height={spriteSize.height}
        />

        <Text
          text={'\nﾋﾞｼﾞｭｱﾗｲｻﾞ'}
          anchor={[0.0, 0.0]}
          position={[20, 20]}
          style={
            new TextStyle({
              align: 'left',
              fontFamily: 'GNUUnifont, Roboto, Helvetica, sans-serif',
              fontSize: 48,
              fill: '#ffffff'
            })
          }
        />

        <Text
          ref={timeRef}
          text={''}
          anchor={[0, 0]}
          position={[20, 10]}
          style={
            new TextStyle({
              align: 'left',
              fontFamily: 'GNUUnifont, Roboto, Helvetica, sans-serif',
              fontSize: 48,
              fill: '#ffffff'
            })
          }
        />
      </>
    )
  }

  return <>{SwitchMode(mode)}</>
}
