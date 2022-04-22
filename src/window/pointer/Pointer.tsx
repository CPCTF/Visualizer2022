import type { VFC } from 'react'
import { useContext, useRef } from 'react'
import { Sprite, useApp, useTick } from '@inlet/react-pixi'
import { pointerSize } from '#/window/globals'
import { BaseTexture, Rectangle, Sprite as PIXISprite, Texture } from 'pixi.js'
import pointerTexture from '#/window/pointer/pointer.png'
import { clearCursorIcon, getCursorIcon } from '#/window/stores/cursorIcon'
import { WindowSettingContext } from '#/window/GlobalSetting'

const pointerBaseTexture = new BaseTexture(pointerTexture)
const pointerTextureWidth = 32
const pointerTextures: Record<string, Texture> = {
  default: new Texture(
    pointerBaseTexture,
    new Rectangle(0, 0, pointerTextureWidth, pointerTextureWidth)
  ),
  'ns-resize': new Texture(
    pointerBaseTexture,
    new Rectangle(
      pointerTextureWidth,
      0,
      pointerTextureWidth,
      pointerTextureWidth
    )
  ),
  'ew-resize': new Texture(
    pointerBaseTexture,
    new Rectangle(
      pointerTextureWidth * 2,
      0,
      pointerTextureWidth,
      pointerTextureWidth
    )
  ),
  'nesw-resize': new Texture(
    pointerBaseTexture,
    new Rectangle(
      pointerTextureWidth * 4,
      0,
      pointerTextureWidth,
      pointerTextureWidth
    )
  ),
  'nwse-resize': new Texture(
    pointerBaseTexture,
    new Rectangle(
      pointerTextureWidth * 3,
      0,
      pointerTextureWidth,
      pointerTextureWidth
    )
  ),
  grab: new Texture(
    pointerBaseTexture,
    new Rectangle(
      pointerTextureWidth * 5,
      0,
      pointerTextureWidth,
      pointerTextureWidth
    )
  ),
  grabbing: new Texture(
    pointerBaseTexture,
    new Rectangle(
      pointerTextureWidth * 6,
      0,
      pointerTextureWidth,
      pointerTextureWidth
    )
  ),
  wait: new Texture(
    pointerBaseTexture,
    new Rectangle(
      pointerTextureWidth * 7,
      0,
      pointerTextureWidth,
      pointerTextureWidth
    )
  )
}

const getPointerTexture = (starting: string) => {
  let cursorCode = starting ? 'wait' : (getCursorIcon() as string)
  if (!pointerTextures[cursorCode]) {
    cursorCode = 'default'
  }
  return pointerTextures[cursorCode] as Texture
}

export const Pointer: VFC = () => {
  const pointerRef = useRef<PIXISprite>(null)
  const {
    windowSettings: { starting }
  } = useContext(WindowSettingContext)

  const app = useApp()
  useTick(() => {
    const pointer = app.renderer.plugins.interaction.mouse.global
    if (pointerRef.current) {
      pointerRef.current.texture = getPointerTexture(starting)
      pointerRef.current.x = pointer.x
      pointerRef.current.y = pointer.y
      clearCursorIcon()
    }
  })
  return (
    <Sprite
      ref={pointerRef}
      anchor={0.5}
      width={pointerSize}
      height={pointerSize}
      texture={pointerTextures.default}
    />
  )
}
