import { EventManagerInstance } from '#/system/EventManager'
import { ThreeResourceLoader } from '#/system/Loader'
import type { SubmissionRaw } from '#/system/ResponseType'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
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
  }

  public start() {
    EventManagerInstance.addEventListener('submission', (e: CustomEvent) => {
      const data = e.detail

      this.question.visible = true
      setTimeout(() => {
        this.question.visible = false
        this.exclamation.visible = true
      }, 1000)
      setTimeout(() => {
        this.exclamation.visible = false
      }, 2000)
    })
    EventManagerInstance.addEventListener('submission', (e: CustomEvent) => {
      const data = e.detail

      this.question.visible = true
    })
  }

  public update() {
    super.start()
  }
}
