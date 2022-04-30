import type { IRenderable } from '#/templates/IRenderable'
import gsap from 'gsap'
import { Euler, PerspectiveCamera, Vector2, Vector3 } from 'three'
import { CircuitManager } from '#/circuit/CliantScript/CircuitManager'
import { EventEmitter } from '#/system/EventEmitter'
import { Time } from '#/system/Time'

export class VisualizerCamera extends PerspectiveCamera implements IRenderable {
  private state: VisualizerCameraState = 'Basis'
  private timeline = gsap.timeline()
  constructor() {
    super(60, 1, 1, 2000)
    EventEmitter.on('recalculatestart', () => {
      this.changeState('RecalculateStart')
    })
    EventEmitter.on('recalculateend', () => {
      this.changeState('RecalculateEnd')
    })
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
      case 'RecalculateStart':
        return this.recalculateStart()
      case 'RecalculateEnd':
        return this.recalculateEnd()
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

  private changeState(state: VisualizerCameraState): void {
    this.timeline.clear()
    this.state = state
  }

  private readonly basisMovePosY = 6.5
  private readonly basisMoveTime = 12
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
    //rot
    const tl1 = gsap.timeline()
    tl1
      .call(() => {
        this.lookAt(0, 0, 0)
      })
      .delay(1 / 30)
      .repeat(1e9)
    //move
    const tl2 = gsap.timeline()
    tl2.to(this.position, this.basisMoveTime, {
      x: toPos.x,
      y: this.basisMovePosY,
      z: toPos.y
    })
    this.timeline.add(tl1, 0)
    this.timeline.add(tl2, 0)
  }

  private lookDisplay(): void {
    //TODO
  }

  private readonly recalculateStartTime = 3
  private readonly recalculateStartPosY = 30
  private readonly recalculateStartRange = 5
  private recalculateStart(): void {
    //rot
    const tl1 = gsap.timeline()
    tl1
      .call(() => {
        this.lookAt(0, 0, 0)
      })
      .delay(1 / 30)
      .repeat(1e9)
    //moveY
    const tl2 = gsap.timeline()
    tl2.to(this.position, this.recalculateStartTime, {
      y: this.recalculateStartPosY
    })
    //moveXZ
    const tl3 = gsap.timeline()
    tl3
      .to(this.position, 1, {
        x: -this.recalculateStartRange,
        z: -this.recalculateStartRange
      })
      .to(this.position, 1, {
        x: this.recalculateStartRange,
        z: -this.recalculateStartRange
      })
      .to(this.position, 1, {
        x: this.recalculateStartRange,
        z: this.recalculateStartRange
      })
      .to(this.position, 1, {
        x: -this.recalculateStartRange,
        z: this.recalculateStartRange
      })
      .repeat(1e9)

    this.timeline.add(tl1, 0)
    this.timeline.add(tl2, 0)
    this.timeline.add(tl3, 0)
  }

  private recalculateEnd(): void {
    this.changeState('Basis')
  }

  public getLookRotation(look: Vector3): Euler {
    const befrot = this.rotation.clone()
    this.lookAt(look)
    const rotate = this.rotation.clone()
    this.rotation.set(befrot.x, befrot.y, befrot.z)
    return rotate
  }
}

export const VisualizerCameraStateList = [
  'Basis',
  'RecalculateStart',
  'RecalculateEnd',
  'Display'
] as const
// TODO: ジャンル追加
export type VisualizerCameraState = typeof VisualizerCameraStateList[number]
