import { ThreeResourceLoader } from '#/system/Loader'
import { Time } from '#/system/Time'
import { EventManagerInstance } from '#/system/EventManager'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import type { Material, Mesh, Object3D } from 'three'
import { RecalculateAnimations } from './Animations'
import recalculatingSrc from './recalculating.glb?url'

export class Recalculate extends VisualizerGroup {
  private recLabel: Object3D
  constructor() {
    super()
    const animation = new RecalculateAnimations()
    animation.scale.set(0.5, 0.5, 0.5)
    this.add(animation)
    this.position.set(0, -10, 0)

    // 再計算ラベル
    this.recLabel = ThreeResourceLoader.get(recalculatingSrc) as Mesh
    ;((this.recLabel.children[0] as Mesh).material as Material).transparent =
      true
    this.recLabel.position.set(0, 0.5, 0)
    this.recLabel.scale.set(1.5, 1.5, 1.5)
    this.add(this.recLabel)
  }

  public start() {
    EventManagerInstance.addEventListener('recalculatestart', () => {
      ;(this.children[0] as RecalculateAnimations)?.animate()
    })
    EventManagerInstance.addEventListener('recalculateend', () => {
      ;(this.children[0] as RecalculateAnimations)?.stop()
    })
  }

  public update() {
    super.update()
    this.recLabel.rotation.y += Time.deltaTime
  }
}
