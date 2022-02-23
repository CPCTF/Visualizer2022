import { Loaders } from './Loader'
import type { Texture } from 'three'

export class User {
  public id
  private _point = 0
  public get point() {
    return this._point
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
    this.id = id
  }

  public set(point: number, displayName: string, iconPath: string) {
    this._point = point
    this._displayName = displayName
    if (!this._iconPath || this._iconPath !== iconPath) {
      this._iconPath = iconPath
      this._icon?.dispose()
      this._icon = Loaders.texture.load(iconPath)
    }
  }
}
