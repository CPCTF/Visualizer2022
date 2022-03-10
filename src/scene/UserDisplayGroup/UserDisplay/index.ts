import { ThreeResourceLoader } from '#/system/Loader'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { Mesh, MeshBasicMaterial, Object3D } from 'three'
import { Display } from './Display'
import monitorSrc from './monitor.glb?url'

export class UserDisplay extends VisualizerGroup {
  constructor() {
    super()
    const display = (ThreeResourceLoader.get(monitorSrc) as Mesh).clone()
    display.material = new MeshBasicMaterial({ color: 0x00ff00 })
    this.add(display)
    this.add(new Display())

    this.scale.set(0.2, 0.2, 0.2)
  }

  public start() {
    // no impl
  }

  public update() {
    super.update()
  }
}
