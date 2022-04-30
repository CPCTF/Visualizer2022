import { Basis } from './Basis'
import { CircuitParts } from './CircuitParts'
import { Condenser } from './CircuitParts/Condenser'
import { CPU } from './CircuitParts/CPU'
import { GraphicBoard } from './CircuitParts/GraphicBoard'
import { HDD } from './CircuitParts/HDD'
import { Memory } from './CircuitParts/Memory'
import { Ports } from './CircuitParts/Ports'
import { SSD } from './CircuitParts/SSD'
import { TipSet } from './CircuitParts/TipSet'
import { PowerSupply } from './CircuitParts/PowerSupply'
import { Audio } from './CircuitParts/Audio'
import { CircuitUtils } from './CircuitUtils'
import { Genre, ServerResponse } from './ServerMain'

export class CircuitBuilder {
  //単位提出数(subUnit毎に一つパーツがおかれる)
  static subUnit = 10
  //予想されるパーツが占領するセルの領域の1辺
  static sideSmallPerParts = 10
  static sideBigPerParts = 18
  //何個小さいパーツが集まると大きいパーツになるか
  static bigPerSmall = 10
  //パーツ設置最大試行回数
  static maxAttempts = 100

  public static dummyServerResponse: ServerResponse = {
    total: 1651,
    genre: {
      PPC: 318,
      Web: 166,
      Crypto: 118,
      Binary: 146,
      Pwn: 80,
      Misc: 206,
      Shell: 80,
      Forensics: 200,
      OSINT: 337
    }
  }

  private static createPartsClass(genre: Genre, isBig: boolean): CircuitParts {
    let res: CircuitParts
    switch (genre) {
      case 'PPC':
        res = new TipSet(isBig)
        break
      case 'Web':
        res = new Memory(isBig)
        break
      case 'Crypto':
        res = new PowerSupply(isBig)
        break
      case 'Binary':
        res = new HDD(isBig)
        break
      case 'Pwn':
        res = new Ports(isBig)
        break
      case 'Misc':
        res = new Audio(isBig)
        break
      case 'Shell':
        res = new SSD(isBig)
        break
      case 'Forensics':
        res = new Condenser(isBig)
        break
      case 'OSINT':
        res = new GraphicBoard(isBig)
        break
    }
    return res
  }

  //基盤部品を配置し、結果をjsonにして返す
  public static build(info: ServerResponse): string {
    let totalSmallNum = 0
    let totalBigNum = 0
    for (const key in info.genre) {
      const genre = key as Genre
      const partsNum = Math.floor(info.genre[genre] / CircuitBuilder.subUnit)
      const partsBigNum = Math.floor(partsNum / CircuitBuilder.bigPerSmall)
      const partsSmallNum = partsNum % CircuitBuilder.bigPerSmall
      totalBigNum += partsBigNum
      totalSmallNum += partsSmallNum
    }
    let side =
      CircuitBuilder.sideSmallPerParts *
      Math.floor(Math.sqrt(totalSmallNum) + 1)
    side +=
      CircuitBuilder.sideBigPerParts * Math.floor(Math.sqrt(totalBigNum) + 1)
    //sideを偶数にする
    side += side % 2 == 0 ? 0 : 1
    const center = Math.floor(side / 2)
    const basis = new Basis(side, side)
    const cpu = new CPU(false)

    const partsInstance: Record<Genre, Array<CircuitParts>> = {
      PPC: new Array(0),
      Web: new Array(0),
      Crypto: new Array(0),
      Binary: new Array(0),
      Pwn: new Array(0),
      Misc: new Array(0),
      Shell: new Array(0),
      Forensics: new Array(0),
      OSINT: new Array(0)
    }

    for (const key in info.genre) {
      const genre = key as Genre
      const partsNum = Math.floor(info.genre[genre] / CircuitBuilder.subUnit)
      const partsBigNum = Math.floor(partsNum / CircuitBuilder.bigPerSmall)
      const partsSmallNum = partsNum % CircuitBuilder.bigPerSmall
      for (let i = 0; i < partsBigNum; i++) {
        partsInstance[genre].push(CircuitBuilder.createPartsClass(genre, true))
      }
      for (let i = 0; i < partsSmallNum; i++) {
        partsInstance[genre].push(CircuitBuilder.createPartsClass(genre, false))
      }
    }

    basis.putParts(center, center, cpu)
    for (const key in partsInstance) {
      const genre = key as Genre
      partsInstance[genre].forEach(v => {
        let x = Math.floor(Math.random() * side)
        let y = Math.floor(Math.random() * side)
        let attempts = 0
        while (!basis.putParts(x, y, v)) {
          attempts += 1
          if (attempts >= CircuitBuilder.maxAttempts) {
            console.error('パーツ設置最大試行回数を超えました')
            break
          }
          x = Math.floor(Math.random() * side)
          y = Math.floor(Math.random() * side)
        }
      })
    }

    const cellss = basis.getAllPartsCells()
    cellss.forEach(cells => cells.forEach(cell => basis.extendWires(cell)))

    const [basisInfo, partsInfos, wiresInfos] = basis.convertToCircuitInfos()
    return CircuitUtils.infoToJson(basisInfo, partsInfos, wiresInfos)
  }
}
