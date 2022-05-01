import { Loaders } from './Loader'
import type { Texture } from 'three'

export class User extends EventTarget {
  public id
  private _score = 0
  public get score() {
    return this._score
  }
  private _displayName = ''
  public get displayName(): string {
    return this._displayName
  }
  private _icon: Texture | null = null
  public get icon(): Texture | null {
    if (!this._icon) {
      throw new Error('Icon is not initialized.')
    }
    return this._icon
  }
  private _iconPath = ''
  public get iconPath(): string {
    return this._iconPath
  }
  constructor(id: string) {
    super()
    this.id = id
  }

  public updateInfo(displayName: string, iconPath: string) {
    this._displayName = displayName
    if (iconPath && (!this._iconPath || this._iconPath !== iconPath)) {
      const url = new URL(iconPath)
      const pathname =
        url.hostname === 'pbs.twimg.com' ? url.href : url.pathname
      this._iconPath = pathname
      this._icon?.dispose()
      this._icon = Loaders.texture.load(pathname)
    }
  }

  public updateScore(score: number) {
    this._score = score
  }
}
