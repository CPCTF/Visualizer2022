import { ThreeResourceLoader } from '#/system/Loader'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import type { Mesh } from 'three'
import { Display } from './Display'
import monitorSrc from './monitor.glb?url'

export class UserDisplay extends VisualizerGroup {
  private display: Display
  public userid = ''
  constructor() {
    super()
    const displayModel = (ThreeResourceLoader.get(monitorSrc) as Mesh).clone()
    this.add(displayModel)
    this.display = new Display()
    this.add(this.display)
  }

  public animation() {
    this.display.animation()
  }

  public start() {
    // no impl
  }

  public update() {
    super.update()
  }
}
