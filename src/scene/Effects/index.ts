import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { Wave } from './Wave'

export class Effects extends VisualizerGroup {
  constructor() {
    super()
    this.add(new Wave())
  }
  public start() {
    // no impl
  }

  public update() {
    super.update()
  }
}
