import type { IRenderable } from '#/templates/IRenderable'
import gsap from 'gsap'
import { Box3, PerspectiveCamera, Vector3 } from 'three'
import { EventEmitter } from '#/system/EventEmitter'
import { UserDisplayGroup } from '#/scene/UserDisplayGroup'
import { Circuit } from '#/scene/Circuit'
import { globalSettings } from '#/system/GlobalSettings'
import { scoreRecalculated } from '#/system/events/ScoreRecalculated'

export class VisualizerCamera extends PerspectiveCamera implements IRenderable {
  private state: VisualizerCameraState = 'parts'
  private timeline = gsap.timeline()
  private readonly defaultPosY = 5
  private readonly minR = 2
  private readonly maxR = 3
  constructor() {
    super(60, 1, 0.01, 500)
  }

  public start(): void {
    this.position.set(0, 3, -6)
    this.lookAt(0, 0, 0)
    EventEmitter.on('submit', ({ userId }) => {
      if (
        this.state == 'cpu' ||
        this.state == 'display' ||
        this.state == 'recalculate'
      )
        return
      this.userId = userId
      this.changeState('cpu')
      gsap.delayedCall(2, () => {
        this.changeState('display')
      })
    })
    EventEmitter.on('recalculatestart', () => {
      this.changeState('recalculate')
    })
    EventEmitter.on('recalculateend', () => {
      gsap.delayedCall(4, () => {
        this.changeState('parts')
      })
    })
  }
  private readonly cpuCamWaitTime = 5
  private cpuCam(): void {
    const targetBox = Circuit.getCPUBox()
    if (targetBox != undefined) {
      this.setCamFromBox(targetBox)
    } else {
      const targetPos = new Vector3(0, 0, 0)
      const radius =
        this.defaultPosY * Math.random() * (this.maxR - this.minR) + this.minR
      const theta = Math.random() * 2 * Math.PI
      const toCam = new Vector3(
        radius * Math.cos(theta),
        this.defaultPosY,
        radius * Math.sin(theta)
      )
      toCam.multiplyScalar(1)
      const camPos = targetPos.clone().add(toCam)
      camPos.setY(this.defaultPosY * Circuit.currentBasisScale)
      this.position.set(camPos.x, camPos.y, camPos.z)
      this.lookAt(targetPos)
    }
    this.setRandomDelay(this.cpuCamWaitTime, this.cpuCamWaitTime)
  }

  private readonly partsCamMinWaitTime = 5
  private readonly partsCamMaxWaitTime = 15
  private partsCam(): void {
    const targetBox = Circuit.getRandomPartsBox()
    if (targetBox != undefined) {
      this.setCamFromBox(targetBox)
    } else {
      this.cpuCam()
    }
    this.setRandomDelay(this.partsCamMinWaitTime, this.partsCamMaxWaitTime)
  }

  private recalculateCam(): void {
    this.position.set(0, 10, -10)
    this.lookAt(0, 0, 5)
    this.setRandomDelay(100000, 100000)
  }

  private userId = ''
  private displayCam(): void {
    const user = UserDisplayGroup.getUserDisplay(this.userId)
    if (user != undefined) {
      const forward = new Vector3()
      user.getWorldDirection(forward)
      const targetPos = user.position
        .clone()
        .add(forward.multiplyScalar(user.scale.z * 5))
      targetPos.add(new Vector3(0, (user.scale.y * 2.5) / 2, 0))
      this.position.set(targetPos.x, targetPos.y, targetPos.z)
      const look = user.position
        .clone()
        .add(new Vector3(0, (user.scale.y * 2.5) / 2, 0))
      this.lookAt(look)
      this.setRandomDelay(3, 3)
      gsap.delayedCall(3, () => {
        this.changeState('parts')
      })
    } else {
      this.changeState('parts')
    }
  }
  //------------------------------------------------------
  private setCamFromBox(targetBox: Box3): void {
    const targetPos = targetBox.min
      .clone()
      .add(targetBox.max)
      .multiplyScalar(0.5)
    const sizeBox = targetBox.max.clone().sub(targetBox.min)
    const size = Math.max(sizeBox.x, sizeBox.z)
    const radius = Math.random() * (this.maxR - this.minR) + this.minR
    const theta = Math.random() * 2 * Math.PI
    const toCam = new Vector3(
      radius * Math.cos(theta),
      this.defaultPosY,
      radius * Math.sin(theta)
    )
    toCam.multiplyScalar(size)
    const camPos = targetPos.clone().add(toCam)
    camPos.setY(this.defaultPosY * Circuit.currentBasisScale)
    this.position.set(camPos.x, camPos.y, camPos.z)
    this.lookAt(targetPos)
  }

  private setRandomDelay(min: number, max: number): void {
    const tl = gsap.timeline()
    tl.call(() => {
      //
    }).delay(Math.random() * (max - min) + min)
    this.timeline.add(tl, 0)
  }

  private stateMethods(): void {
    switch (this.state) {
      case 'cpu':
        this.cpuCam()
        return
      case 'parts':
        this.partsCam()
        return
      case 'recalculate':
        this.recalculateCam()
        return
      case 'display':
        this.displayCam()
        return
    }
  }

  private stateMachine() {
    if (!this.timeline.isActive()) {
      this.timeline.clear()
      this.stateMethods()
      this.timeline.play(0)
    }
  }

  private changeState(state: VisualizerCameraState): void {
    if (this.state == 'recalculate' && state !== 'parts') return
    this.timeline.clear()
    this.state = state
    globalSettings.cameraNumber = VisualizerCameraStateList.indexOf(state)
  }

  public update(): void {
    this.stateMachine()
  }
}

export const VisualizerCameraStateList = [
  'cpu',
  'parts',
  'recalculate',
  'display'
] as const
// TODO: ジャンル追加
export type VisualizerCameraState = typeof VisualizerCameraStateList[number]
