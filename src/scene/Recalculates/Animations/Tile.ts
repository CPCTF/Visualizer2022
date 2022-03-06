import { VisualizerObject } from '#/templates/VisualizerObject'
import { MeshBasicMaterial, PlaneBufferGeometry, Vector3 } from 'three'
import { gsap, Back } from 'gsap'

export class Tile extends VisualizerObject {
  constructor() {
    super(
      new PlaneBufferGeometry(1, 1),
      new MeshBasicMaterial({
        color: Math.floor(Math.random() * 256 * 256 * 256)
      })
    )
    this.rotation.set(-Math.PI / 2, 0, 0)
  }

  public to(position: Vector3) {
    const tl = gsap.timeline()
    const startPos = this.position
    tl.to(this.position, 0.2, {
      x: startPos.x,
      y: startPos.y + 0.3,
      z: startPos.z,
      ease: Back.easeOut
    })
      .to(this.position, 0.6, {
        x: position.x,
        y: position.y + 0.3,
        z: position.z,
        ease: Back.easeOut
      })
      .to(this.position, 0.2, {
        x: position.x,
        y: position.y,
        z: position.z,
        ease: Back.easeOut
      })
  }
}
