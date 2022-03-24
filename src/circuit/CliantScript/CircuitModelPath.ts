import type { ProblemCategory } from '../BothScript/CircuitInfo'
import cpuSrc from '#/circuit/CircuitModels/cpu.glb?url'
import graphicBoardSrc from '#/circuit/CircuitModels/graphicBoard.glb?url'
import hddSrc from '#/circuit/CircuitModels/hdd.glb?url'
import memorySrc from '#/circuit/CircuitModels/memory.glb?url'
import powerSupplySrc from '#/circuit/CircuitModels/powerSupply.glb?url'
import tipsetSrc from '#/circuit/CircuitModels/tipSet.glb?url'

export class CircuitModelPath {
  public static cpuPath: string = cpuSrc
  public static partsPath: Record<ProblemCategory, string> = {
    None: cpuSrc,
    Reversing: graphicBoardSrc,
    Pwn: hddSrc,
    PPC: memorySrc,
    Crypto: powerSupplySrc,
    Shell: tipsetSrc,
    Forensics: '',
    Web: '',
    OSINT: '',
    Misc: ''
  }
  public static partsBigPath: Record<ProblemCategory, string> = {
    None: '',
    Reversing: '',
    Pwn: '',
    PPC: '',
    Crypto: '',
    Shell: '',
    Forensics: '',
    Web: '',
    OSINT: '',
    Misc: ''
  }
}
