import { RunVisualizer } from '#/Visualizer'
import type { WindowComponentProps } from '#/window/stores/WindowSystem'
import { Suspense, useEffect, useRef, useState, VFC } from 'react'
import { Texture, BaseTexture } from 'pixi.js'
import { Sprite, useTick } from '@inlet/react-pixi'

export const CanvasFrame: VFC<WindowComponentProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const resizeHandlerRef = useRef((width: number, height: number) => {
    // no
  })
  const [texture, setTexture] = useState<Texture>(
    new Texture(new BaseTexture())
  )

  useTick(() => {
    texture.update()
  })

  useEffect(() => {
    if (resizeHandlerRef.current) resizeHandlerRef.current(width, height)
  }, [width, height])
  useEffect(() => {
    const canvas = document.createElement('canvas') as HTMLCanvasElement
    canvasRef.current = canvas

    resizeHandlerRef.current = RunVisualizer(canvas)
    resizeHandlerRef.current(width, height)
    setTexture(new Texture(BaseTexture.from(canvas)))
    document.body.append(canvas)
  }, [])

  return <Sprite texture={texture} width={width} height={height} />
}
