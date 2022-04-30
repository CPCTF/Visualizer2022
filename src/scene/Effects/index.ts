import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { Sky } from './Sky'
import { Wave } from './Wave'

export class Effects extends VisualizerGroup {
  constructor() {
    super()
    const wave = new Wave()
    wave.position.setY(-1)
    this.add(wave)
    this.add(new Sky())
  }
  public start() {
    // no impl
  }

  public update() {
    super.update()
  }
}
