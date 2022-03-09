import { Object3D, Texture, TextureLoader } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

type ResourceType =
  | {
      type: 'gltf'
      data: Object3D
    }
  | {
      type: 'texture'
      data: Texture
    }
  | {
      type: 'fbx'
      data: Object3D
    }

type CallbackType = (data: ResourceType['data']) => void

export const Loaders = {
  texture: new TextureLoader(),
  gltf: new GLTFLoader(),
  fbx: new FBXLoader()
}

const createResources = (
  path: string,
  type: ResourceType['type'],
  callback: CallbackType
) => {
  switch (type) {
    case 'gltf': {
      Loaders.gltf.load(path, gltf => {
        callback(gltf.scene)
      })
      break
    }
    case 'texture': {
      Loaders.texture.load(path, texture => {
        callback(texture)
      })
      break
    }
  }
}

export class ThreeResourceLoader {
  private static resources: Record<string, ResourceType> = {}
  private static queue: [string, ResourceType['type']][] = []

  public static addGLTF(path: string) {
    this.queue.push([path, 'gltf'])
  }

  public static addTexture(path: string) {
    this.queue.push([path, 'texture'])
  }

  public static addFBX(path: string) {
    this.queue.push([path, 'fbx'])
  }

  public static load(
    onProgress: (data: {
      path: string
      data: ResourceType['data']
      total: number
      count: number
    }) => void
  ) {
    return new Promise(resolve => {
      let count = 0
      const total = this.queue.length
      if (total === 0) resolve({})
      this.queue.map(([path, type]) => {
        createResources(path, type, data => {
          count += 1
          this.resources[path] = {
            type,
            data
          } as ResourceType
          onProgress({
            path,
            data: data,
            total,
            count
          })
          if (count === total) resolve({})
        })
      })
      this.queue = []
    })
  }

  public static get(path: string): ResourceType['data'] | undefined {
    return this.resources[path]?.data
  }
}
