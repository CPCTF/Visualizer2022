import type {
  CircuitServerBasisInfo,
  CircuitServerPartsInfo,
  CircuitServerWiresInfo
} from './CircuitServerInfo'

export class CircuitUtils {
  static infoToJson(
    circuitBasisInfo: CircuitServerBasisInfo,
    circuitPartsInfos: CircuitServerPartsInfo[],
    circuitWiresInfos: CircuitServerWiresInfo[]
  ): string {
    const objs = new Array<ICircuit>(0)
    const basisObj: IBasisInfo = {
      class: 'basis',
      sizeX: circuitBasisInfo.sizeX,
      sizeY: circuitBasisInfo.sizeY
    }
    objs.push(basisObj)
    circuitPartsInfos.forEach(v => {
      const obj: IPartsInfo = {
        class: 'parts',
        x: v.x,
        z: v.z,
        isBig: v.isBig,
        category: v.category
      }
      objs.push(obj)
    })
    circuitWiresInfos.forEach(v => {
      const obj: IWiresInfo = {
        class: 'wires',
        x: v.x,
        z: v.z,
        wires: v.wires
      }
      objs.push(obj)
    })
    return JSON.stringify(objs)
  }
}

interface ICircuit {
  class: string
}

interface IBasisInfo extends ICircuit {
  sizeX: number
  sizeY: number
}

interface IPartsInfo extends ICircuit {
  x: number
  z: number
  isBig: boolean
  category: string
}

interface IWiresInfo extends ICircuit {
  x: number
  z: number
  wires: [number, number][]
}
