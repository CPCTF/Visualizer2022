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
import type { QuestionGenre } from '#/system/ResponseType'

export class CircuitModelPath {
  public static cpuPath: string = cpuSrc
  public static partsPath: Record<QuestionGenre, string> = {
    Newbie: graphicBoardSrc,
    PPC: hddSrc,
    Web: memorySrc,
    Crypto: powerSupplySrc,
    Binary: tipsetSrc,
    Pwn: audioSrc,
    Misc: condenserSrc,
    Shell: portsSrc,
    Forensics: ssdSrc,
    OSINT: ''
  }
  public static partsBigPath: Record<QuestionGenre, string> = {
    Newbie: '',
    PPC: '',
    Web: '',
    Crypto: '',
    Binary: '',
    Pwn: '',
    Misc: '',
    Shell: '',
    Forensics: '',
    OSINT: ''
  }
}
