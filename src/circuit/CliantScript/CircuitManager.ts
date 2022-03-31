import {
  CircuitBasisInfo,
  CircuitInfoUtils,
  CircuitPartsInfo,
  CircuitWiresInfo
} from '../BothScript/CircuitInfo'

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
    return [
      this.circuitBasisInfo,
      this.circuitPartsInfos,
      this.circuitWiresInfos
    ] as [CircuitBasisInfo, CircuitPartsInfo[], CircuitWiresInfo[]]
  }
}
