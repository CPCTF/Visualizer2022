import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { Application, Text, TextStyle } from 'pixi.js'
import {
  CanvasTexture,
  Color,
  Mesh,
  MeshBasicMaterial,
  PlaneBufferGeometry,
  Texture
} from 'three'

export class SubmissionInfo extends VisualizerGroup {
  private app: Application
  private texture: Texture
  private nameText: Text
  private titleText: Text
  private needsUpdate = false
  constructor() {
    super()
    const width = 1024
    const height = 48
    this.app = new Application({
      width,
      height,
      autoStart: false,
      backgroundAlpha: 0
    })
    this.nameText = new Text('string')
    this.nameText.anchor.set(0.5, 0)
    this.nameText.position.set(width / 2, 0)
    this.app.stage.addChild(this.nameText)

    this.titleText = new Text('string')
    this.titleText.anchor.set(0.5, 0)
    this.titleText.position.set(width / 2, 24)
    this.app.stage.addChild(this.titleText)

    const mesh = new Mesh(
      new PlaneBufferGeometry(width, height),
      new MeshBasicMaterial({ map: null, transparent: true })
    )
    mesh.position.z = 0.0001
    const mesh2 = mesh.clone()
    mesh2.rotation.y = Math.PI
    mesh2.position.z = -0.00001
    this.texture = new CanvasTexture(this.app.view)
    mesh.material.map = this.texture
    mesh2.material.map = this.texture
    this.add(mesh, mesh2)
  }

  public redraw(name: string, title: string, color: Color) {
    const bright = color.getStyle()
    const dark = color.clone().multiplyScalar(0.8).getStyle()
    this.nameText.text = name
    this.nameText.style = new TextStyle({
      fontFamily: 'GNUUnifont',
      dropShadowAngle: 6.7,
      dropShadowDistance: 3,
      fill: bright,
      fontSize: 20,
      lineJoin: 'round',
      stroke: dark,
      strokeThickness: 2
    })
    this.nameText.style.fill = bright
    this.nameText.style.stroke = dark
    this.titleText.text = title
    this.titleText.style = new TextStyle({
      fontFamily: 'GNUUnifont',
      dropShadowAngle: 6.7,
      dropShadowDistance: 3,
      fill: bright,
      fontSize: 20,
      lineJoin: 'round',
      stroke: dark,
      strokeThickness: 2
    })
    this.needsUpdate = true
  }

  public update() {
    super.update()
    if (this.needsUpdate) {
      this.app.render()
      this.texture.needsUpdate = true
      this.needsUpdate = false
    }
  }
}
