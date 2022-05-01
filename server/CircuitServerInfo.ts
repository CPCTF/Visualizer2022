export class CircuitServerBasisInfo {
  constructor(public sizeX: number, public sizeY: number) {}
}

export class CircuitServerPartsInfo {
  constructor(
    public x: number,
    public z: number,
    public isBig: boolean,
    public category: string
  ) {}
}

export class CircuitServerWiresInfo {
  constructor(
    public x: number,
    public z: number,
    public wires: [number, number][]
  ) {}
}

export class CircuitServerInfoUtils {
  static jsonToInfo(
    json: string
  ): [
    CircuitServerBasisInfo,
    CircuitServerPartsInfo[],
    CircuitServerWiresInfo[]
  ] {
    const objs = JSON.parse(json) as ICircuitServer[]
    let basisInfo: CircuitServerBasisInfo = new CircuitServerBasisInfo(0, 0)
    const partsInfos: CircuitServerPartsInfo[] = new Array(0)
    const wiresInfos: CircuitServerWiresInfo[] = new Array(0)
    objs.forEach(obj => {
      if (obj.class == 'basis') {
        const basis = obj as IBasisInfo
        basisInfo = new CircuitServerBasisInfo(basis.sizeX, basis.sizeY)
      } else if (obj.class == 'parts') {
        const parts = obj as IPartsInfo
        partsInfos.push(
          new CircuitServerPartsInfo(
            parts.x,
            parts.z,
            parts.isBig,
            parts.category
          )
        )
      } else if (obj.class == 'wires') {
        const wires = obj as IWiresInfo
        wiresInfos.push(
          new CircuitServerWiresInfo(wires.x, wires.z, wires.wires)
        )
      }
    })
    return [basisInfo, partsInfos, wiresInfos]
  }
}

interface ICircuitServer {
  class: string
}

interface IBasisInfo extends ICircuitServer {
  sizeX: number
  sizeY: number
}

interface IPartsInfo extends ICircuitServer {
  x: number
  z: number
  isBig: boolean
  category: string
}

interface IWiresInfo extends ICircuitServer {
  x: number
  z: number
  wires: [number, number][]
}
