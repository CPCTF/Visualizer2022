import type { IRenderable } from '#/templates/IRenderable'
import gsap from 'gsap'
import { Euler, PerspectiveCamera, Vector2, Vector3 } from 'three'
import { CircuitManager } from '#/circuit/CliantScript/CircuitManager'
import { EventEmitter } from '#/system/EventEmitter'
import { UserDisplayGroup } from '#/scene/UserDisplayGroup'

export class VisualizerCamera extends PerspectiveCamera implements IRenderable {
  private state: VisualizerCameraState = 'Basis'
  private timeline = gsap.timeline()
  constructor() {
    super(60, 1, 1, 2000)
  }

  public start(): void {
    this.position.set(10, 6, 0)
    this.lookAt(0, 0, 0)

    EventEmitter.on('submit', ({ userId }) => {
      this.userId = userId
      if (this.state == 'Display') return
      this.changeState('Display')
    })
    EventEmitter.on('recalculatestart', () => {
      this.changeState('RecalculateStart')
    })
    EventEmitter.on('recalculateend', () => {
      this.changeState('RecalculateEnd')
    })
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
  private readonly basisMoveTime = 10
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

  private userId = ''
  private readonly forwardLength = 3
  private readonly lookDisplayPosY = 2.5
  private readonly lookDisplayRange = 2.5
  private readonly lookDisplayMoveTime = 1
  private readonly lookDisplayTime = 5
  private lookDisplay(): void {
    //rot
    const tl1 = gsap.timeline()
    tl1
      .call(() => {
        this.lookAt(0, 0, 0)
      })
      .delay(1 / 30)
      .repeat(1e9)
    this.timeline.add(tl1, 0)
    //move
    const tl2 = gsap.timeline()
    tl2
      .to(this.position, 1, {
        x: -this.lookDisplayRange,
        y: this.lookDisplayPosY,
        z: -this.lookDisplayRange,
        ease: 'linear'
      })
      .to(this.position, 1, {
        x: this.lookDisplayRange,
        y: this.lookDisplayPosY,
        z: -this.lookDisplayRange,
        ease: 'linear'
      })
      .to(this.position, 1, {
        x: this.lookDisplayRange,
        y: this.lookDisplayPosY,
        z: this.lookDisplayRange,
        ease: 'linear'
      })
      .to(this.position, 1, {
        x: -this.lookDisplayRange,
        y: this.lookDisplayPosY,
        z: this.lookDisplayRange,
        ease: 'linear'
      })
      .call(() => {
        tl1.clear()
      })

    const user = UserDisplayGroup.getUserDisplay(this.userId)
    if (user != undefined) {
      const forward = new Vector3()
      const userPos = user.position
      user.getWorldDirection(forward)
      forward.multiplyScalar(this.forwardLength)
      forward.add(userPos)
      tl2.to(this.position, this.lookDisplayMoveTime, {
        x: forward.x,
        y: forward.y,
        z: forward.z
      })
      tl2.to(this.rotation, 1, {
        x: this.getLookRotation(userPos).x,
        y: this.getLookRotation(userPos).y,
        z: this.getLookRotation(userPos).z
      })
      tl2.to(this.position, this.lookDisplayTime, {
        x: forward.x,
        y: forward.y + 0.5,
        z: forward.z
      })
    }
    tl2.call(() => this.changeState('Basis'))
    this.timeline.add(tl2, 0)
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
        z: -this.recalculateStartRange,
        ease: 'linear'
      })
      .to(this.position, 1, {
        x: this.recalculateStartRange,
        z: -this.recalculateStartRange,
        ease: 'linear'
      })
      .to(this.position, 1, {
        x: this.recalculateStartRange,
        z: this.recalculateStartRange,
        ease: 'linear'
      })
      .to(this.position, 1, {
        x: -this.recalculateStartRange,
        z: this.recalculateStartRange,
        ease: 'linear'
      })
      .repeat(1e9)

    this.timeline.add(tl1, 0)
    this.timeline.add(tl2, 0)
    this.timeline.add(tl3, 0)
  }

  private readonly recalculateEndTime = 3
  private recalculateEnd(): void {
    //rot
    const tl1 = gsap.timeline()
    tl1
      .call(() => {
        this.lookAt(0, 0, 0)
      })
      .delay(1 / 30)
      .repeat(1e9)
    this.timeline.add(tl1, 0)
    //moveY
    const tl2 = gsap.timeline()
    tl2
      .to(this.position, this.recalculateEndTime, {
        y: this.basisMovePosY
      })
      .call(() => {
        this.changeState('Basis')
      })
    this.timeline.add(tl2, 0)
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
