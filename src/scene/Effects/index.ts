import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { Sky } from './Sky'
import { Wave } from './Wave'

export class Effects extends VisualizerGroup {
  constructor() {
    super()
    this.add(new Wave())
    this.add(new Sky())
  }
  public start() {
    // no impl
  }

  public update() {
    super.update()
  }
}
