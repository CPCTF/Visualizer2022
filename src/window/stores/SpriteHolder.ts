import { Loader, Spritesheet, Texture } from 'pixi.js'

export class SpriteHolder {
  private static sheet: Spritesheet | null = null
  private static loaded = false
  private static onLoadFunc: (() => void) | null = null
  public static initialize() {
    if (SpriteHolder.sheet === null) {
      const basepath = location.pathname.replace(/index\.html.*/gm, '')
      Loader.shared
        .add('uisprites', `${basepath}sprites/spritesheet.json`)
        .load(() => {
          SpriteHolder.sheet =
            Loader.shared.resources['uisprites'].spritesheet ?? null
          this.loaded = true
          if (this.onLoadFunc) this.onLoadFunc()
        })
    }
  }
  public static get(path: string): Texture | null {
    if (!this.sheet) return null
    return this.sheet.textures[path]
  }
  public static onLoad(func: () => void) {
    if (this.loaded) func()
    else this.onLoadFunc = func
  }
}

SpriteHolder.initialize()
