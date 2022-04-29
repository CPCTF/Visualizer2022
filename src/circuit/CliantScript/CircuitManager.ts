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
  private static initBasisSize = [30, 30]
  public static getBasisSize(): [number, number] {
    return [
      this.circuitBasisInfo?.sizeX ?? this.initBasisSize[0],
      this.circuitBasisInfo?.sizeY ?? this.initBasisSize[1]
    ]
  }
  public static setCircuitInfo(json: string) {
    const isDebug = false
    if (isDebug) {
      ;[this.circuitBasisInfo, this.circuitPartsInfos, this.circuitWiresInfos] =
        CircuitInfoUtils.jsonToInfo(JSON.stringify(jsonSrc))
    } else {
      ;[this.circuitBasisInfo, this.circuitPartsInfos, this.circuitWiresInfos] =
        CircuitInfoUtils.jsonToInfo(json)
    }
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
