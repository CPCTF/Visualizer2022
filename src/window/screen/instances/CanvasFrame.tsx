import { RunVisualizer } from '#/Visualizer'
import type { WindowComponentProps } from '#/window/stores/WindowSystem'
import { useEffect, useRef, useState, VFC } from 'react'
import { Texture, BaseTexture } from 'pixi.js'
import { Sprite, useTick } from '@inlet/react-pixi'
import { LoadingCanvas } from './CanvasFrame/Loading'

export const CanvasFrame: VFC<WindowComponentProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const resizeHandlerRef = useRef<(width: number, height: number) => void>(
    () => {
      // no
    }
  )
  const [spriteSize, setSpriteSize] = useState({ width, height })
  const [texture, setTexture] = useState<Texture>(
    new Texture(new BaseTexture())
  )

  useTick(() => {
    texture.update()
  })

  useEffect(() => {
    if (resizeHandlerRef.current) {
      resizeHandlerRef.current(width, height)
      texture.update()
      setSpriteSize({ width, height })
    }
  }, [width, height])

  const [isLoading, setIsLoading] = useState(true)
  const callVisualizer = () => {
    const canvas = document.createElement('canvas') as HTMLCanvasElement
    canvasRef.current = canvas

    resizeHandlerRef.current = RunVisualizer(canvas)
    resizeHandlerRef.current(width, height)
    setTexture(new Texture(BaseTexture.from(canvas)))
    setIsLoading(false)
  }

  return (
    <>
      <Sprite
        texture={texture}
        width={spriteSize.width}
        height={spriteSize.height}
      />
      {isLoading ? (
        <LoadingCanvas
          width={width}
          height={height}
          loadedHandler={callVisualizer}
        />
      ) : null}
    </>
  )
}
