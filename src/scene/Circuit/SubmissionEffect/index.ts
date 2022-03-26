import { EventEmitter } from '#/system/EventEmitter'
import { ThreeResourceLoader } from '#/system/Loader'
import type { SubmissionRaw } from '#/system/ResponseType'
import { Time } from '#/system/Time'
import { UserManager } from '#/system/UserManager'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import gsap, { Elastic } from 'gsap'
import { Color, Group, Mesh, ShaderMaterial } from 'three'
import symbolsSrc from './symbols.glb?url'
import { moldingMesh } from './molding'
import { SubmissionInfo } from './SubmissionInfo'

export class SubmissionEffect extends VisualizerGroup {
  private question: Mesh
  private exclamation: Mesh
  private submissionInfo: SubmissionInfo
  private objects: Group
  constructor() {
    super()
    this.objects = new Group()
    // add icons
    this.question = (ThreeResourceLoader.get(symbolsSrc) as Group)
      .children[0] as Mesh
    this.exclamation = (ThreeResourceLoader.get(symbolsSrc) as Group)
      .children[1] as Mesh
    this.question.position.y = 0.4
    this.exclamation.position.y = 0.4
    this.question.visible = false
    this.exclamation.visible = false
    moldingMesh(this.question, new Color(0xff0000))
    moldingMesh(this.exclamation, new Color(0x00ff00))
    this.objects.add(this.question)
    this.objects.add(this.exclamation)
    this.add(this.objects)

    // add submission info
    this.add((this.submissionInfo = new SubmissionInfo()))
    this.submissionInfo.scale.set(0.01, 0.01, 0.01)

    this.position.y = 0.5
  }

  public start() {
    EventEmitter.on('submit', (submission: SubmissionRaw) => {
      const tl = gsap.timeline()
      tl.timeScale(1 / 2.5)
      tl.call(() => {
        this.question.visible = true
        this.objects.rotation.x = Math.PI * 0.3
        this.objects.position.z = 0
        this.submissionInfo.visible = true
        this.submissionInfo.redraw(
          UserManager.getUser(submission.userid)?.displayName as string,
          submission.title,
          new Color(0xff0000)
        )
      })
      tl.to(this.objects.rotation, 0.3, {
        x: 0,
        ease: Elastic.easeOut.config(1, 0.3)
      })
      tl.to(
        this.objects.position,
        0.15,
        {
          z: 0.1,
          ease: Elastic.easeIn.config(1, 0.3)
        },
        '+=0.1'
      )
      tl.call(() => {
        this.question.visible = false
        this.exclamation.visible = true
        this.submissionInfo.redraw('Solved!', '', new Color(0x00ff00))
      })
      tl.to(this.objects.position, 0.15, {
        z: 0,
        ease: Elastic.easeOut.config(1, 0.3)
      })
      tl.to(
        this.objects.position,
        0.15,
        {
          z: -0.1,
          ease: Elastic.easeIn.config(1, 0.3)
        },
        `+=0.15`
      )
      tl.call(() => {
        this.exclamation.visible = false
        this.submissionInfo.visible = false
      })
    })
  }

  public update() {
    super.update()
    this.rotation.y += Math.PI * Time.deltaTime * 0.3
    this.position.y = Math.sin((Time.time * Math.PI) / 2.0) * 0.1 + 0.5
    ;(this.question.material as ShaderMaterial[])[0].uniforms.time.value =
      Time.time
    ;(this.exclamation.material as ShaderMaterial[])[0].uniforms.time.value =
      Time.time
    ;(this.question.material as ShaderMaterial[])[1].uniforms.time.value =
      Time.time
    ;(this.exclamation.material as ShaderMaterial[])[1].uniforms.time.value =
      Time.time
  }
}
