import { Time } from '#/system/Time'
import { EventEmitter } from '#/system/EventEmitter'
import type { IRenderable } from '#/templates/IRenderable'
import gsap from 'gsap'
import {
  Euler,
  Object3D,
  PerspectiveCamera,
  Quaternion,
  Vector2,
  Vector3
} from 'three'
import { CircuitManager } from '#/circuit/CliantScript/CircuitManager'
import type { CircuitBasisInfo } from '#/circuit/BothScript/CircuitInfo'

export class VisualizerCamera extends PerspectiveCamera implements IRenderable {
  private state: VisualizerCameraState = 'Basis'
  private timeline = gsap.timeline()
  private readonly minPosY = 6
  constructor() {
    super(60, 1, 1, 2000)
    /*
    EventEmitter.on('recalculatestart', () => {
      gsap.to(this.position, 2, { y: 20 })
    })
    EventEmitter.on('recalculateend', () => {
      gsap.to(this.position, 2, { y: 10 })
    })
    */
  }

  public start(): void {
    this.position.set(10, 6, 0)
    this.lookAt(0, 0, 0)
    this.lookBasis()
  }

  public update(): void {
    this.stateMachine()
  }

  private stateMethods(): void {
    switch (this.state) {
      case 'Basis':
        return this.lookBasis()
      case 'Display':
        return this.lookDisplay()
    }
  }

  private stateMachine() {
    if (!this.timeline.isActive()) {
      console.log('stateMachine')
      this.timeline.clear()
      this.stateMethods()
      this.timeline.play(0)
    }
  }

  private readonly basisMoveTime = 12
  private readonly basisRotTime = 2
  private basisSideDir = 0
  private lookBasis(): void {
    this.basisSideDir =
      (this.basisSideDir + 1 + Math.floor(Math.random() * 3)) % 4
    const [sizeX, sizeZ] = CircuitManager.getBasisSize()
    const toPosX =
      this.basisSideDir % 2 == 0
        ? sizeX * Math.random() - sizeX / 2
        : this.basisSideDir == 1
        ? sizeX / 2
        : -sizeX / 2
    const toPosZ =
      this.basisSideDir % 2 == 1
        ? sizeZ * Math.random() - sizeZ / 2
        : this.basisSideDir == 0
        ? sizeZ / 2
        : -sizeZ / 2

    const toPos = new Vector2(toPosX, toPosZ)
    const rotate = this.getLookRotation(new Vector3(toPos.x, -10, toPos.x))
    //rot
    const tl1 = gsap.timeline()
    /*
    tl1.to(this.rotation, this.basisMoveTime, {
      x: rotate.x,
      y: rotate.y,
      z: rotate.z
    })*/
    tl1
      .call(() => {
        this.lookAt(0, 0, 0)
        console.log('lookAt')
      })
      .delay(1 / 30)
      .repeat(1e9)
    //move
    const tl2 = gsap.timeline()
    tl2.to(this.position, this.basisMoveTime, {
      x: toPos.x,
      z: toPos.y
    })
    this.timeline.add(tl1, 0)
    this.timeline.add(tl2, 0)
  }

  private lookDisplay(): void {
    //TODO
  }

  private getLookRotation(look: Vector3): Euler {
    const befrot = this.rotation.clone()
    this.lookAt(look)
    const rotate = this.rotation.clone()
    this.rotation.set(befrot.x, befrot.y, befrot.z)
    return rotate
  }
}

export const VisualizerCameraStateList = ['Basis', 'Display'] as const
// TODO: ジャンル追加
export type VisualizerCameraState = typeof VisualizerCameraStateList[number]
