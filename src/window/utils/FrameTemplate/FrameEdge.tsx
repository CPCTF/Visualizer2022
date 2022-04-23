import { windowEdge, windowHeaderHeight } from '#/window/globals'
// import { SpriteHolder } from '#/window/stores/SpriteHolder'
import { Sprite } from '@inlet/react-pixi'
import { BaseTexture, Rectangle, Texture } from 'pixi.js'
import type { VFC } from 'react'
import frameEdgeSrc from './frame-edge.png'

const frameEdgeSprites = new BaseTexture(frameEdgeSrc)
const frameEdge = {
  topLeft: new Texture(frameEdgeSprites, new Rectangle(0, 0, 6, 26)),
  top: new Texture(frameEdgeSprites, new Rectangle(6, 0, 3, 26)),
  topRight: new Texture(frameEdgeSprites, new Rectangle(9, 0, 6, 26)),
  right: new Texture(frameEdgeSprites, new Rectangle(9, 26, 6, 3)),
  bottomRight: new Texture(frameEdgeSprites, new Rectangle(9, 29, 6, 6)),
  bottom: new Texture(frameEdgeSprites, new Rectangle(6, 29, 3, 6)),
  bottomLeft: new Texture(frameEdgeSprites, new Rectangle(0, 29, 6, 6)),
  left: new Texture(frameEdgeSprites, new Rectangle(0, 26, 6, 3))
}

export const FrameEdge: VFC<{ width: number; height: number }> = ({
  width,
  height
}) => {
  // const frameEdge = {
  //   topLeft: SpriteHolder.get('WindowBorderUpperLeft.png'),
  //   top: SpriteHolder.get('WindowBorderTop.png'),
  //   topRight: SpriteHolder.get('WindowBorderUpperRight.png'),
  //   right: SpriteHolder.get('WindowBorderRight.png'),
  //   bottomRight: SpriteHolder.get('WindowBorderLowerLeft.png'),
  //   bottom: SpriteHolder.get('WindowBorderUpperLeft.png'),
  //   bottomLeft: SpriteHolder.get('WindowBorderUpperLeft.png'),
  //   left: SpriteHolder.get('WindowBorderUpperLeft.png'),
  // }
  return (
    <>
      <Sprite
        texture={frameEdge.topLeft}
        position={[0, 0]}
        width={windowEdge}
        height={windowHeaderHeight}
      />
      <Sprite
        texture={frameEdge.top}
        position={[windowEdge, 0]}
        width={width - windowEdge * 2}
        height={windowHeaderHeight}
      />
      <Sprite
        texture={frameEdge.topRight}
        position={[width - windowEdge, 0]}
        width={windowEdge}
        height={windowHeaderHeight}
      />
      <Sprite
        texture={frameEdge.right}
        position={[width - windowEdge, windowHeaderHeight]}
        width={windowEdge}
        height={height - windowHeaderHeight - windowEdge}
      />
      <Sprite
        texture={frameEdge.bottomRight}
        position={[width - windowEdge, height - windowEdge]}
        width={windowEdge}
        height={windowEdge}
      />
      <Sprite
        texture={frameEdge.bottom}
        position={[windowEdge, height - windowEdge]}
        width={width - windowEdge * 2}
        height={windowEdge}
      />
      <Sprite
        texture={frameEdge.bottomLeft}
        position={[0, height - windowEdge]}
        width={windowEdge}
        height={windowEdge}
      />
      <Sprite
        texture={frameEdge.left}
        position={[0, windowHeaderHeight]}
        width={windowEdge}
        height={height - windowHeaderHeight - windowEdge}
      />
    </>
  )
}
