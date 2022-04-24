import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { Emergency } from './Emergency'

export class EmergencyAnimation extends VisualizerGroup {
  private size = 30
  private positionOffset = 1
  private offsetTimeUnit = 0.1
  private emergencies: Array<Emergency> = new Array(0)
  constructor() {
    super()
    for (let i = 0; i < this.size; i++) {
      const z = i * ((this.positionOffset * 3) / 2) - Math.floor(this.size / 2)
      const offsetTime = i * this.offsetTimeUnit
      for (let j = 0; j < this.size; j++) {
        const x =
          j * (Math.sqrt(3) * this.positionOffset) +
          (i % 2 == 1 ? this.positionOffset * (Math.sqrt(3) / 2) : 0) -
          Math.floor(this.size / 2)
        const emergency = new Emergency(offsetTime)
        emergency.position.setX(x)
        emergency.position.setZ(z)
        this.emergencies.push(emergency)
        this.add(emergency)
      }
    }
  }
}
