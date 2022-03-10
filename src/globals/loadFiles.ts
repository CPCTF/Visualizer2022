import { ThreeResourceLoader } from '#/system/Loader'
import recalculationgGlb from '#/scene/Recalculates/recalculating.glb?url'
import userDisplayGlb from '#/scene/UserDisplayGroup/UserDisplay/monitor.glb?url'
import faceSrc from '#/scene/UserDisplayGroup/UserDisplay/face.png?url'
import testIconSrc from '#/scene/UserDisplayGroup/UserDisplay/testicon.jpg'

export const addLoadFiles = () => {
  ThreeResourceLoader.addGLTF(recalculationgGlb)
  ThreeResourceLoader.addGLTF(userDisplayGlb)
  ThreeResourceLoader.addTexture(faceSrc)
  ThreeResourceLoader.addTexture(testIconSrc)
}
