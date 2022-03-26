import { EventEmitter } from '#/system/EventEmitter'
import { ThreeResourceLoader } from '#/system/Loader'
import type { SubmissionRaw } from '#/system/ResponseType'
import { Time } from '#/system/Time'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import gsap, { Elastic } from 'gsap'
import type { Mesh, Object3D } from 'three'
import exclamationSrc from './exclamation.glb?url'
import questionSrc from './question.glb?url'

export class SubmissionEffect extends VisualizerGroup {
  private question: Object3D
  private exclamation: Object3D
  constructor() {
    super()
    this.question = ThreeResourceLoader.get(questionSrc) as Mesh
    this.exclamation = ThreeResourceLoader.get(exclamationSrc) as Mesh
    this.question.visible = false
    this.exclamation.visible = false
    this.add(this.question)
    this.add(this.exclamation)

    this.position.y = 0.5
  }

  public start() {
    EventEmitter.on('submit', (submission: SubmissionRaw) => {
      const tl = gsap.timeline()
      tl.timeScale(1 / 2.5)
      tl.call(() => {
        this.question.visible = true
        this.rotation.x = Math.PI * 0.3
      })
      tl.to(this.rotation, 0.3, {
        x: 0,
        ease: Elastic.easeOut.config(1, 0.3)
      })
      tl.to(this.position, 0.15, {
        x: 0.1,
        ease: Elastic.easeIn.config(1, 0.3)
      })
      tl.call(() => {
        this.question.visible = false
        this.exclamation.visible = true
      })
      tl.to(this.position, 0.15, {
        x: 0,
        ease: Elastic.easeOut.config(1, 0.3)
      })
      tl.to(
        this.position,
        0.15,
        {
          x: -0.1,
          ease: Elastic.easeIn.config(1, 0.3)
        },
        `+=${0.25}`
      )
      tl.call(() => {
        this.exclamation.visible = false
      })
    })
  }

  public update() {
    super.update()
    this.rotation.y += Math.PI * Time.deltaTime * 0.3
    this.position.y = Math.sin((Time.time * Math.PI) / 2.0) * 0.1 + 0.5
  }
}
