import { VisualizerObject } from '#/templates/VisualizerObject'
import { BoxGeometry, MeshBasicMaterial } from 'three'

export class UserMonolith extends VisualizerObject {
  constructor() {
    super(
      new BoxGeometry(0.1, 0.2, 0.05),
      new MeshBasicMaterial({ color: 0x00ff00 })
    )
  }

  public start() {
    // no impl
  }

  public update() {
    super.update()
  }
}
