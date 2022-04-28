import { Time } from '#/system/Time'
import { VisualizerObject } from '#/templates/VisualizerObject'
import { BoxGeometry, MeshBasicMaterial } from 'three'

export class MainCircuit extends VisualizerObject {
  constructor() {
    super(new BoxGeometry(1, 1, 1), new MeshBasicMaterial({ color: 0xff0000 }))
  }

  public start() {
    //console.log('circuit')
  }
  public update() {
    super.update()
    this.rotation.y = Math.PI * Time.deltaTime
  }
}
