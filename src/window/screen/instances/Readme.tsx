import type { WindowComponentProps } from '#/window/stores/WindowSystem'
import { useMemo, VFC } from 'react'
import { Graphics, TextStyle } from 'pixi.js'
import { Container, Text } from '@inlet/react-pixi'

const readmeText = `# VisualizerOS(仮称)
せいさくしゃ: Fogrex, Renard, Uzaki

## 使い方
アイコンをダブルクリックしてアプリケーションを起動
(注意: Visualizerは一度しか起動できません)

ウインドウのヘッダーにあるボタンは
それぞれ最小化、最大化、プロセス終了です。
ウインドウのヘッダーをつかんでドラッグすれば
ウインドウの移動が出来ますし、
ウインドウ端をドラッグすれば
ウインドウのサイズを変えられます。`

export const ReadmeFrame: VFC<WindowComponentProps> = ({
  x,
  y,
  width,
  height
}) => {
  return (
    <Container
      mask={useMemo(
        () => new Graphics().drawRect(x, y, width, height),
        [x, y, width, height]
      )}
    >
      <Text
        text={readmeText}
        anchor={0}
        position={[0, 0]}
        style={
          new TextStyle({
            align: 'left',
            fontFamily: 'Roboto, Helvetica, sans-serif',
            fontSize: 32,
            fill: '#000000'
          })
        }
      />
    </Container>
  )
}
