import { moldingMesh } from '#/scene/Circuit/SubmissionEffect/molding'
import { ThreeResourceLoader } from '#/system/Loader'
import { Time } from '#/system/Time'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import { Mesh, Group, Color, ShaderMaterial, BufferGeometry } from 'three'
import emergencySrc from './emergency.glb?url'
export class Emergency extends VisualizerGroup {
  private emergencyBlack: Mesh
  private emergencyRed: Mesh
  private offsetTime: number
  private loopTime = 2
  static emergencyBlackGeom: BufferGeometry | undefined = undefined
  static emergencyRedGeom: BufferGeometry | undefined = undefined
  constructor(offsetTime = 0) {
    super()
    if (Emergency.emergencyBlackGeom == undefined) {
      const group = ThreeResourceLoader.get(emergencySrc)?.clone() as Group
      Emergency.emergencyBlackGeom = (
        (group as Group).children[0] as Mesh
      ).geometry
    }
    if (Emergency.emergencyRedGeom == undefined) {
      const group = ThreeResourceLoader.get(emergencySrc)?.clone() as Group
      Emergency.emergencyRedGeom = (
        (group as Group).children[1] as Mesh
      ).geometry
    }
    this.offsetTime = offsetTime
    this.emergencyBlack = new Mesh(Emergency.emergencyBlackGeom)
    this.emergencyRed = new Mesh(Emergency.emergencyRedGeom)
    moldingMesh(this.emergencyBlack, new Color(0x000000))
    moldingMesh(this.emergencyRed, new Color(0xff0000))
    this.add(this.emergencyBlack)
    this.add(this.emergencyRed)
  }
  public start(): void {
    super.start()
  }
  public update(): void {
    super.update()
    let size = Math.sin(
      ((Time.time + this.offsetTime) / this.loopTime) * Math.PI * 2
    )
    size = size < 0 ? 0 : size
    this.scale.set(size, size, size)
    ;(this.emergencyBlack.material as ShaderMaterial[])[0].uniforms.time.value =
      Time.time + this.offsetTime
    ;(this.emergencyRed.material as ShaderMaterial[])[0].uniforms.time.value =
      Time.time + this.offsetTime
    ;(this.emergencyBlack.material as ShaderMaterial[])[1].uniforms.time.value =
      Time.time + this.offsetTime
    ;(this.emergencyRed.material as ShaderMaterial[])[1].uniforms.time.value =
      Time.time + this.offsetTime
  }
}
