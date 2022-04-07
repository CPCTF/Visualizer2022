import { ThreeResourceLoader } from '#/system/Loader'
import type { User } from '#/system/User'
import { UserManager } from '#/system/UserManager'
import { VisualizerGroup } from '#/templates/VisualizerGroup'
import type { Mesh } from 'three'
import { Display } from './Display'
import monitorSrc from './monitor.glb?url'

export class UserDisplay extends VisualizerGroup {
  private display: Display
  private user: User | null = null
  public get userid() {
    return this.user?.id
  }
  constructor() {
    super()
    const displayModel = (ThreeResourceLoader.get(monitorSrc) as Mesh).clone()
    this.add(displayModel)
    this.display = new Display()
    this.add(this.display)
  }

  public animation() {
    this.display.animation()
  }

  public updateUser(userid: string) {
    // TODO: update animation
    const user = UserManager.getUser(userid)
    if (!user) this.user = null
    else {
      this.user = user
      this.display.setIcon(user.icon)
    }
  }

  public start() {
    // no impl
  }

  public update() {
    super.update()
  }
}
