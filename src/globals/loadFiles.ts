import { ThreeResourceLoader } from '#/system/Loader'
import recalculationgGlb from '#/scene/Recalculates/recalculating.glb?url'

export const addLoadFiles = () => {
  ThreeResourceLoader.addGLTF(recalculationgGlb)
}
