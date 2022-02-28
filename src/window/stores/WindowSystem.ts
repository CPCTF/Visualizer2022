import type { SvelteComponent } from 'svelte'
import { writable } from 'svelte/store'

export interface WindowInfo {
  title: string
  rect: {
    x: number
    y: number
    width: number
    height: number
  }
  visible: boolean
  Component: typeof SvelteComponent
}

export class WindowSystem {
  private static _windows = writable<Record<string, WindowInfo>>({})
  private static _windowIndices = writable<string[]>([])
  public static get windows() {
    return this._windows
  }
  public static get windowIndices() {
    return this._windowIndices
  }

  public static updateWindow(id: string, info: WindowInfo) {
    this._windows.update((windowMap: Record<string, WindowInfo>) => {
      const newInstance = { ...windowMap }
      newInstance[id] = info
      return newInstance
    })
    this._windowIndices.update((indexList: string[]) => {
      if (indexList.includes(id)) return indexList
      const newInstance = [...indexList]
      newInstance.push(id)
      return newInstance
    })
  }
}
