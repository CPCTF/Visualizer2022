import { WebSocketInstance } from '#/system/WebSocketReceiver'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { RecalculateAnimations } from './Animations'

export class Recalculate extends VisualizerGroup {
  constructor() {
    super()
    this.add(new RecalculateAnimations())
    WebSocketInstance.addEventListener('recalculate', () => {
      ;(this.children[0] as RecalculateAnimations)?.animate()
    })

    // for test
    const tick = () => {
      ;(this.children[0] as RecalculateAnimations)?.animate()
      setTimeout(tick, 15000)
    }
    tick()
  }

  // public start() {}

  // public update() {}
}
