import { SetupVisualizer, SetupVisualizerReturn } from '#/Visualizer'
import type { WindowComponentProps } from '#/window/stores/WindowSystem'
import { useEffect, useRef, useState, VFC } from 'react'
import { Texture, BaseTexture } from 'pixi.js'
import { Sprite, useTick } from '@inlet/react-pixi'
import { LoadingCanvas } from './CanvasFrame/Loading'
import { SplashScreen } from './CanvasFrame/SplashScreen'

type VisualizerMode = 'loading' | 'splashscreen' | 'visualizer'

export const CanvasFrame: VFC<WindowComponentProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const visualizerHandlerRef = useRef<SetupVisualizerReturn>()
  const [spriteSize, setSpriteSize] = useState({ width, height })
  const [texture, setTexture] = useState<Texture>(
    new Texture(new BaseTexture())
  )
  const [mode, setMode] = useState<VisualizerMode>('loading')

  useTick(() => {
    texture.update()
  })

  useEffect(() => {
    if (visualizerHandlerRef.current) {
      visualizerHandlerRef.current.resizeHandler(width, height)
      texture.update()
      setSpriteSize({ width, height })
    }
  }, [width, height])

  const callVisualizer = () => {
    const canvas = document.createElement('canvas') as HTMLCanvasElement
    canvasRef.current = canvas

    visualizerHandlerRef.current = SetupVisualizer(canvas)
    visualizerHandlerRef.current.resizeHandler(width, height)
    setTexture(new Texture(BaseTexture.from(canvas)))
    setMode('splashscreen')
  }
  const runVisualizer = () => {
    if (visualizerHandlerRef.current) {
      visualizerHandlerRef.current.startVisualizer()
    }
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
      <Sprite
        texture={texture}
        width={spriteSize.width}
        height={spriteSize.height}
      />
    )
  }

  return <>{SwitchMode(mode)}</>
}
