import { writable } from 'svelte/store'

export interface WindowInfo {
  title: string
  rect: {
    x: number
    y: number
    width: number
    height: number
  }
}

export class WindowSystem {
  private static _windows = writable<Record<string, WindowInfo>>({})
  private static _windowIndicies = writable<string[]>([])
  public static get windows() {
    return this._windows
  }
  public static get windowIndicies() {
    return this._windowIndicies
  }

  public static addWindow(id: string, info: WindowInfo) {
    this._windows.update((windowMap: Record<string, WindowInfo>) => {
      const newInstance = { ...windowMap }
      newInstance[id] = info
      return newInstance
    })
    this._windowIndicies.update((indexList: string[]) => {
      const newInstance = [...indexList]
      newInstance.push(id)
      return newInstance
    })
  }
}
