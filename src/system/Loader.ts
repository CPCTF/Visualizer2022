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

export const Loaders = {
  texture: new TextureLoader(),
  gltf: new GLTFLoader(),
  fbx: new FBXLoader()
}

const createResources = (
  path: string,
  type: ResourceType['type']
): Promise<ResourceType['data']> => {
  return new Promise<ResourceType['data']>((resolve, reject) => {
    switch (type) {
      case 'gltf': {
        Loaders.gltf.load(
          path,
          gltf => {
            // TODO: uncomment delay load
            // setTimeout(() => {
            resolve(gltf.scene as Object3D)
            // }, 500 * Math.random() + 500)
          },
          () => 0,
          e => {
            reject(e)
          }
        )
        break
      }
      case 'texture': {
        Loaders.texture.load(
          path,
          texture => {
            // setTimeout(() => {
            resolve(texture as Texture)
            // }, 500 * Math.random() + 500)
          },
          () => 0,
          e => {
            reject(e)
          }
        )
        break
      }
    }
  })
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
    let chain: Promise<ResourceType['data'] | void> | null = null
    let count = 0
    const total = this.queue.length
    if (total === 0) return
    this.queue.map(([path, type]) => {
      if (!chain) chain = createResources(path, type)
      else chain = chain.then(() => createResources(path, type))
      chain = chain
        .then(
          ((data: unknown) => {
            count += 1
            this.resources[path] = {
              type,
              data
            } as ResourceType
            onProgress({
              path,
              data: data as ResourceType['data'],
              total,
              count
            })
          }).bind(this)
        )
        .catch(e => {
          console.log('loaderror', e)
        })
    })
    this.queue = []
    return chain
  }

  public static get(path: string): ResourceType['data'] | undefined {
    return this.resources[path]?.data
  }
}
