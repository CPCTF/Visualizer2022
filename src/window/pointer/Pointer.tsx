import type { VFC } from 'react'
import { useContext, useRef } from 'react'
import { Sprite, useApp, useTick } from '@inlet/react-pixi'
import { pointerSize } from '#/window/globals'
import type { Sprite as PIXISprite, Texture } from 'pixi.js'
import { clearCursorIcon, getCursorIcon } from '#/window/stores/cursorIcon'
import { WindowSettingContext } from '#/window/GlobalSetting'
import { SpriteHolder } from '../stores/SpriteHolder'

const id2file: Record<string, string> = {
  default: 'CursorDefault.png',
  'ns-resize': 'CursorNsResize.png',
  'ew-resize': 'CursorEwResize.png',
  'nesw-resize': 'CursorNeswResize.png',
  'nwse-resize': 'CursorNwseResize.png',
  grab: 'CursorGrab.png',
  grabbing: 'CursorGrabbing.png',
  wait: 'CursorWait.png'
}

const getPointerTexture = (starting: string) => {
  let cursorCode = starting ? 'wait' : (getCursorIcon() as string)
  if (!id2file[cursorCode]) {
    cursorCode = 'default'
  }
  return SpriteHolder.get(id2file[cursorCode])
}

export const Pointer: VFC = () => {
  const pointerRef = useRef<PIXISprite>(null)
  const {
    windowSettings: { starting }
  } = useContext(WindowSettingContext)

  const app = useApp()
  useTick(() => {
    const pointer = app.renderer.plugins.interaction.mouse.global
    const tex = getPointerTexture(starting)
    if (pointerRef.current && tex) {
      pointerRef.current.texture = tex
      pointerRef.current.x = pointer.x
      pointerRef.current.y = pointer.y
      clearCursorIcon()
    }
  })
  const defaultTex = getPointerTexture('default') as Texture
  if (!defaultTex) return <></>
  return (
    <Sprite
      ref={pointerRef}
      anchor={0.5}
      width={pointerSize}
      height={pointerSize}
      texture={defaultTex}
    />
  )
}
