import { VisualizerObject } from '#/templates/VisualizerObject'
import { Application, Text, TextStyle } from 'pixi.js'
import {
  CanvasTexture,
  Color,
  DoubleSide,
  MeshBasicMaterial,
  PlaneBufferGeometry,
  Texture,
  TextureLoader
} from 'three'

export class SubmissionInfo extends VisualizerObject {
  private app: Application
  private texture: Texture
  private text: Text
  private width: number
  private height: number
  constructor() {
    const width = 1024
    const height = 24
    super(
      new PlaneBufferGeometry(width, height),
      new MeshBasicMaterial({ map: null, side: DoubleSide, transparent: true })
    )
    this.width = width
    this.height = height
    this.app = new Application({
      width,
      height,
      autoStart: false,
      backgroundAlpha: 0
    })
    this.text = new Text('string', new TextStyle())
    this.text.anchor.set(0.5)
    this.text.position.set(width / 2, height / 2)
    this.app.stage.addChild(this.text)
    this.texture = new CanvasTexture(this.app.view)
    ;(this.material as MeshBasicMaterial).map = this.texture
    document.body.appendChild(this.app.view)
  }

  public redraw(text: string, color: Color) {
    this.text.text = text
    this.text.style.fill = color.getStyle()
    this.app.render()
    this.texture.needsUpdate = true
  }
}
