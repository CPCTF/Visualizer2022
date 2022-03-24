export class CircuitBasisInfo {
  constructor(public sizeX: number, public sizeY: number) {}
}

export class CircuitPartsInfo {
  constructor(
    public x: number,
    public z: number,
    public isBig: boolean,
    public category: string
  ) {}
}

export class CircuitWiresInfo {
  constructor(
    public x: number,
    public z: number,
    public wires: [number, number][]
  ) {}
}

export class CircuitInfoUtils {
  static jsonToInfo(
    json: string
  ): [CircuitBasisInfo, CircuitPartsInfo[], CircuitWiresInfo[]] {
    const objs = JSON.parse(json) as ICircuit[]
    let basisInfo: CircuitBasisInfo = new CircuitBasisInfo(0, 0)
    const partsInfos: CircuitPartsInfo[] = new Array(0)
    const wiresInfos: CircuitWiresInfo[] = new Array(0)
    objs.forEach(obj => {
      if (obj.class == 'basis') {
        const basis = obj as IBasisInfo
        basisInfo = new CircuitBasisInfo(basis.sizeX, basis.sizeY)
      } else if (obj.class == 'parts') {
        const parts = obj as IPartsInfo
        partsInfos.push(
          new CircuitPartsInfo(parts.x, parts.z, parts.isBig, parts.category)
        )
      } else if (obj.class == 'wires') {
        const wires = obj as IWiresInfo
        wiresInfos.push(new CircuitWiresInfo(wires.x, wires.z, wires.wires))
      }
    })
    return [basisInfo, partsInfos, wiresInfos]
  }

  static infoToJson(
    circuitBasisInfo: CircuitBasisInfo,
    circuitPartsInfos: CircuitPartsInfo[],
    circuitWiresInfos: CircuitWiresInfo[]
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

export const problemCategory = [
  'None',
  'Reversing',
  'Pwn',
  'PPC',
  'Crypto',
  'Shell',
  'Forensics',
  'Web',
  'OSINT',
  'Misc'
] as const

export type ProblemCategory = typeof problemCategory[number]
