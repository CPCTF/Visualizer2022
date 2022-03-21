import type { ProblemCategory } from '../BothScript/CircuitInfo'
import cpuSrc from '#/circuit/CircuitModels/cpu.glb?url'
import graphicBoardSrc from '#/circuit/CircuitModels/graphicBoard.glb?url'
import memorySrc from '#/circuit/CircuitModels/memory.glb?url'
import powerSupplySrc from '#/circuit/CircuitModels/powerSupply.glb?url'
import tipsetSrc from '#/circuit/CircuitModels/tipset.glb?url'

export class CircuitModelPath {
  public static cpuPath: string = cpuSrc
  public static partsPath: Record<ProblemCategory, string> = {
    0: cpuSrc,
    1: graphicBoardSrc,
    2: memorySrc,
    3: powerSupplySrc,
    4: tipsetSrc,
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
  }
  public static partsBigPath: Record<ProblemCategory, string> = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
  }
}
