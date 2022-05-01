import { Time } from '#/system/Time'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import type { ShaderMaterial } from 'three'
import { Emergency } from './Emergency'

export class EmergencyAnimation extends VisualizerGroup {
  private size = 30
  private positionOffset = 2 / Math.sqrt(3)
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
  public start() {
    super.start()
  }
  public update() {
    super.update()
    ;(
      Emergency.emergencyBlackMaterial as ShaderMaterial[]
    )[0].uniforms.time.value = Time.time
    ;(
      Emergency.emergencyRedMaterial as ShaderMaterial[]
    )[0].uniforms.time.value = Time.time
    ;(
      Emergency.emergencyBlackMaterial as ShaderMaterial[]
    )[1].uniforms.time.value = Time.time
    ;(
      Emergency.emergencyRedMaterial as ShaderMaterial[]
    )[1].uniforms.time.value = Time.time
  }
}
