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

const Loaders = {
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
  private resources: Record<string, ResourceType>
  private queue: [string, ResourceType['type']][]

  constructor() {
    this.resources = {}
    this.queue = []
  }

  public addGLTF(path: string) {
    this.queue.push([path, 'gltf'])
  }

  public addTexture(path: string) {
    this.queue.push([path, 'texture'])
  }

  public addFBX(path: string) {
    this.queue.push([path, 'fbx'])
  }

  public load(
    onProgress: (data: {
      path: string
      data: ResourceType['data']
      total: number
      count: number
    }) => void,
    onLoad: () => void
  ) {
    let count = 0
    const total = this.queue.length
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
        if (count === total) onLoad()
      })
    })
    this.queue = []
  }

  public get(path: string): ResourceType['data'] | undefined {
    return this.resources[path]?.data
  }
}
