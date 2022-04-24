import { ThreeResourceLoader } from '#/system/Loader'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import type { Mesh, Group } from 'three'
import emergencySrc from './emergency.glb?url'
export class Emergency extends VisualizerGroup {
  private emergency: Mesh
  constructor() {
    super()
    this.emergency = (ThreeResourceLoader.get(emergencySrc) as Group)
      .children[0] as Mesh
    this.add(this.emergency)
  }
}
