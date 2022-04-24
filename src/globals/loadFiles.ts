import { ThreeResourceLoader } from '#/system/Loader'
import recalculationgGlb from '#/scene/Recalculates/recalculating.glb?url'
import userDisplayGlb from '#/scene/UserDisplayGroup/UserDisplay/monitor.glb?url'
import faceSrc from '#/scene/UserDisplayGroup/UserDisplay/face.png?url'
import testIconSrc from '#/utils/testicon.jpg'
import cpuSrc from '#/circuit/CircuitModels/cpu.glb?url'
import graphicBoardSrc from '#/circuit/CircuitModels/graphicBoard.glb?url'
import hddSrc from '#/circuit/CircuitModels/hdd.glb?url'
import memorySrc from '#/circuit/CircuitModels/memory.glb?url'
import powerSupplySrc from '#/circuit/CircuitModels/powerSupply.glb?url'
import tipsetSrc from '#/circuit/CircuitModels/tipSet.glb?url'
import audioSrc from '#/circuit/CircuitModels/audio.glb?url'
import condenserSrc from '#/circuit/CircuitModels/condenser.glb?url'
import portsSrc from '#/circuit/CircuitModels/ports.glb?url'
import ssdSrc from '#/circuit/CircuitModels/ssd.glb?url'
import symbolSrc from '#/scene/Circuit/SubmissionEffect/symbols.glb?url'
import emergencySrc from '#/scene/Recalculates/Emergency/emergency.glb?url'

export const addLoadFiles = () => {
  ThreeResourceLoader.addGLTF(recalculationgGlb)
  ThreeResourceLoader.addGLTF(userDisplayGlb)
  ThreeResourceLoader.addTexture(faceSrc)
  ThreeResourceLoader.addTexture(testIconSrc)
  ThreeResourceLoader.addGLTF(cpuSrc)
  ThreeResourceLoader.addGLTF(graphicBoardSrc)
  ThreeResourceLoader.addGLTF(hddSrc)
  ThreeResourceLoader.addGLTF(memorySrc)
  ThreeResourceLoader.addGLTF(powerSupplySrc)
  ThreeResourceLoader.addGLTF(tipsetSrc)
  ThreeResourceLoader.addGLTF(audioSrc)
  ThreeResourceLoader.addGLTF(condenserSrc)
  ThreeResourceLoader.addGLTF(portsSrc)
  ThreeResourceLoader.addGLTF(ssdSrc)
  ThreeResourceLoader.addGLTF(symbolSrc)
  ThreeResourceLoader.addGLTF(emergencySrc)
}
