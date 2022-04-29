import {
  CircuitBasisInfo,
  CircuitInfoUtils,
  CircuitPartsInfo,
  CircuitWiresInfo
} from '../BothScript/CircuitInfo'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import jsonSrc from '../../../public/circuit.json'

export class CircuitManager {
  static circuitBasisInfo: CircuitBasisInfo | undefined = undefined
  static circuitPartsInfos: CircuitPartsInfo[] | undefined = undefined
  static circuitWiresInfos: CircuitWiresInfo[] | undefined = undefined
  public static setCircuitInfo(json: string) {
    ;[this.circuitBasisInfo, this.circuitPartsInfos, this.circuitWiresInfos] =
      CircuitInfoUtils.jsonToInfo(json)
  }
  public static getCircuitInfo(): [
    CircuitBasisInfo,
    CircuitPartsInfo[],
    CircuitWiresInfo[]
  ] {
    const isDebug = true
    if (isDebug) {
      return CircuitInfoUtils.jsonToInfo(JSON.stringify(jsonSrc))
    } else {
      return [
        this.circuitBasisInfo,
        this.circuitPartsInfos,
        this.circuitWiresInfos
      ] as [CircuitBasisInfo, CircuitPartsInfo[], CircuitWiresInfo[]]
    }
  }
}
